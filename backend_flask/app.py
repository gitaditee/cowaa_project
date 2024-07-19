from flask import Flask, render_template,jsonify,request, current_app, abort;
from flask_mysqldb import MySQL
from flask_mysqldb import MySQL
import MySQLdb.cursors
from flask_cors import CORS
import datetime
from datetime import datetime, timedelta
from threading import Thread
import time,threading

app= Flask(__name__, template_folder='template')
# ----------------------------------- mysql config -----------------------------------

app.config['MYSQL_HOST']='localhost'
app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']='Cdmg#@567'
app.config['MYSQL_DB']='coins_db'
mysql=MySQL(app)
cros=CORS(app)

#  ------------------------------ creating router user (fetch data from mysql) ----------------------

# ----------- /dataofdailyactivegraph showing the count of user logged in daily to display in the format of graph as for (Daily Active User Logged In)-------------------
@app.route('/dataofdailyactivegraph', methods=['GET'])
def dataofdailyactivegraph():
    try:

        end_date = datetime.now()
        start_date = end_date - timedelta(days=5)
        date_list = [(start_date + timedelta(days=i)).strftime('%Y-%m-%d') for i in range(6)]

        cur = mysql.connection.cursor()
        cur.execute("""
            SELECT 
                DATE_FORMAT(LoginTime, '%Y-%m-%d') AS date_interval, 
                COUNT(*) AS active_user_count 
            FROM 
                login_status 
            WHERE 
                IsActive = 1 
                AND LoginTime >= DATE_SUB(CURDATE(), INTERVAL 5 DAY) 
            GROUP BY 
                date_interval 
            ORDER BY 
                date_interval ASC;
        """)
        result = cur.fetchall()  
        mysql.connection.commit()
        cur.close()
        active_user_counts = {row[0]: row[1] for row in result}
        data_list = [{'date_interval': date, 'active_user_count': active_user_counts.get(date, 0)} for date in date_list]

        return jsonify({'data': data_list})
    except Exception as e:  
        return jsonify({'error': str(e)}), 500


   # ----------- /dataofweeklyactivegraph showing the count of user logged in every week to display in the format of graph (Monthly User Logged in )-------------------

@app.route('/dataofweeklyactivegraph',methods=['GET'])
def dataofweeklyactivegraph():
    try:
        cur = mysql.connection.cursor()
        cur.execute("""
            SELECT 
                w.week_interval,
                COALESCE(ls.user_count, 0) AS user_count 
            FROM (
                SELECT 
                    DATE_FORMAT(DATE_SUB(CURDATE(), INTERVAL WEEKDAY(CURDATE()) + (7 * (x - 1)) DAY), '%Y-%m-%d') AS week_interval 
                FROM 
                    (SELECT @row := @row + 1 AS x FROM 
                        (SELECT 0 UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) AS a,
                        (SELECT 0 UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) AS b, 
                        (SELECT @row := 0) AS c 
                    LIMIT 6) AS x 
            ) AS w 
            LEFT JOIN (
                SELECT 
                    DATE_FORMAT(DATE_SUB(LoginTime, INTERVAL WEEKDAY(LoginTime) DAY), '%Y-%m-%d') AS week_interval,
                    COUNT(*) AS user_count 
                FROM 
                    login_status 
                WHERE 
                    IsActive = 1 AND LoginTime <= CURDATE() AND LoginTime > DATE_SUB(CURDATE(), INTERVAL 5 WEEK) 
                GROUP BY 
                    week_interval
            ) AS ls 
            ON w.week_interval = ls.week_interval 
            ORDER BY 
                w.week_interval ASC;
        """)
        result = cur.fetchall()
        mysql.connection.commit()
        cur.close()

        data = [{'week_interval': row[0], 'user_count': row[1]} for row in result]

        return jsonify({'data': data})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
    
# ----------- /dataof15daysinterval showing the count of user logged in every 15 days to display in the format of graph as (Total Active User Logged In) -------------------
@app.route('/dataof15dayinterval', methods=['GET'])
def dataof15dayinterval():
    try:
        end_date = datetime.now()
        date_intervals = [(end_date - timedelta(days=i)).strftime('%Y-%m-%d') for i in range(0, 75, 15)]
        date_intervals.reverse()

        data_list = []
        for date in date_intervals:
            start_date = datetime.strptime(date, '%Y-%m-%d')
            end_date = start_date + timedelta(days=15)
            cur = mysql.connection.cursor()
            cur.execute("""
                SELECT 
                    COUNT(*) AS active_user_count 
                FROM 
                    login_status 
                WHERE 
                    IsActive = 1 
                    AND LoginTime >= %s 
                    AND LoginTime <= %s;
            """, (start_date, end_date))
            result = cur.fetchone()  
            mysql.connection.commit()
            cur.close()

            active_user_count = result[0] if result else 0
            data_list.append({'days_interval': f'{start_date.strftime("%d")} - {(start_date + timedelta(days=15)).strftime("%d")}', 'user_count': active_user_count})

        return jsonify({'data': data_list})
    except Exception as e:  
        return jsonify({'error': str(e)}), 500

           
    # --------------------- this code is checking whether the user logging in is alreday registered or not (if registered than store their data in login table)
@app.route('/login',methods=['POST'])
def login():
    if request.method == 'POST':
        Email = request.json['email_id']
        Password = request.json['password']
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM cowaa_login WHERE Email=%s AND Password=%s", (Email, Password))
        data = cur.fetchone()
        if data:
            cur.execute("INSERT INTO login_status (Email, Password) VALUES (%s, %s)", (Email, Password))
            mysql.connection.commit() 

            
            return jsonify({'message': 'Successfully logged in'})
        else:
            return jsonify({'message': 'Invalid credentials'})
    else:
        return jsonify({'message': 'This endpoint only accepts POST requests'})

#--------------------- this code is fetching the data of every user which is logged in and displaying them on tha dashboard overview --------------------
    
@app.route('/user/<string:Email>', methods=['GET'])
def get_user_details(Email):
   try:
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM cowaa_login WHERE Email=%s", (Email,))
        user_details = cur.fetchone()
        if user_details:
            user_data = {
                'id': user_details[0],
                'name': user_details[1],
                'Email': user_details[2],
                'designation': user_details[3],
                'password': user_details[4],
                'department': user_details[5],
                'address': user_details[6],
                'registration_date':user_details[7],
                'updated_at': user_details[8]
            }
            return jsonify({'user_details': user_data})
        else:
            return jsonify({'message': 'User not found'})
   except MySQLdb.MySQLError as e:
        print(f"Error fetching user details: {e}")
        return jsonify({'message': 'Error fetching user details'}), 500
   finally:
        cur.close()
     
           #---------------------------this is showing the total active logged in user an registered user (counts) to display in the cards below
@app.route("/api/count")
def show_count():
 
    cur = mysql.connection.cursor()
    cur.execute("select count(*) as registration_count from cowaa_login;")
    registration_count = cur.fetchone()[0]
    cur.execute("SELECT COUNT(*) FROM login_status ;")
    total_active_users = cur.fetchone()[0]
    ans_data = {
        'registration_count': registration_count,
        'total_active_users': total_active_users
    }
    return jsonify(ans_data)



# --------------------------------- this is showing the regitration graph api fetching by month -----------------------------------
def fetch_registration_count_by_date():
    query = """
     SELECT DATE_FORMAT(RegistrationDate, '%b') as month, COUNT(*) as count
    FROM cowaa_login
    WHERE MONTH(RegistrationDate) BETWEEN 1 AND 12  -- Ensure to include all months
    GROUP BY month
    ORDER BY FIELD(month, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
    """
    cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cursor.execute(query)
    results = cursor.fetchall()
    cursor.close()
    return results

def format_month_data(data):
    formatted_data = []
    for entry in data:
        month_name = entry['month']
        count = entry['count']
        formatted_data.append({'month': month_name, 'count': count})
    return formatted_data

@app.route('/registration_counts', methods=['GET'])
def get_registration_counts():
    data = fetch_registration_count_by_date()
    formatted_data = format_month_data(data)
    return jsonify(formatted_data)

#------------------------------------- regsitration graph by today by time ------------------------------
def fetch_login_count_by_time():
    query = """
    SELECT DATE_FORMAT(LastUpdateTime, '%H:00') as timeofdate, COUNT(*) as count
    FROM cowaa_login
    GROUP BY DATE_FORMAT(LastUpdateTime, '%H:00')
    ORDER BY DATE_FORMAT(LastUpdateTime, '%H:00');
    """
    cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cursor.execute(query)
    results = cursor.fetchall()
    cursor.close()
    return results

@app.route('/login_counts', methods=['GET'])
def get_login_counts():
    data = fetch_login_count_by_time()
    return jsonify(data)

#------------------------------------- this is showing the data in api for login trend monthly ------------
@app.route('/login_counts_by_month', methods=['GET'])
def login_counts_by_month():

    try:
        
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)

        query = """
            SELECT 
                DATE_FORMAT(LoginTime, '%m') AS month,
                COUNT(*) AS login_count
            FROM 
                login_status
            GROUP BY 
                DATE_FORMAT(LoginTime, '%m')
            ORDER BY 
                month
        """

        
        cursor.execute(query)

        login_counts = cursor.fetchall()

        cursor.close()

        response = []
        for row in login_counts:
            response.append({
                'month': row['month'],
                'login_count': row['login_count']
            })

        return jsonify(response)

    except Exception as e:
        return jsonify({'error': str(e)})


#------------------------- api for showing the data in the cards above -------------------------------
@app.route("/api/users")
def list_users():
    
    try:
        cur = mysql.connection.cursor()

        #---------------- it displayes Total Active User Login (TAU)-------------------
        cur.execute("SELECT COUNT(*) FROM login_status WHERE IsActive = TRUE;")
        total_active_users = cur.fetchone()[0]

        # Query to fetch monthly count of active logins
        #----------------- it displayes Monthly Active User Login (MAU) ----------------
        cur.execute("""
            SELECT 
        COUNT(*) AS active_logins
    FROM 
        login_status
    WHERE 
        YEAR(LoginTime) = YEAR(NOW())
        AND MONTH(LoginTime) = MONTH(NOW())
        """)
        result = cur.fetchone()
        active_logins_current_month = result[0] if result else 0 
       
    
       #------------------- Daily Active User Login (DAU)----------------------
        current_date = datetime.now()
        current_date_str = current_date.strftime('%Y-%m-%d')
        cur.execute("""
    SELECT 
        COUNT(*) AS active_logins_current_date
    FROM 
        login_status
    WHERE 
        IsActive = TRUE
        AND DATE(LoginTime) = %s
""", (current_date_str,))
        active_logins_current_date = cur.fetchone()[0]

     #-------------------Newly Registered Users---------------
        current_date_str = current_date.strftime('%Y-%m-%d')
        cur.execute("""
    SELECT 
        COUNT(*) AS active_register_current_date
    FROM 
        cowaa_login
    WHERE 
         DATE(LastUpdateTime) = %s
""", (current_date_str,))

        active_register_current_date = cur.fetchone()[0]
#----------------------Total Registered Users-------------------
        cur.execute("select count(*) as registration_count from cowaa_login;")
        registration_count = cur.fetchone()[0]

# Execute the query with the current date as parameter     
        cur.close()
        result = {
            'total_active_users': total_active_users,
            'active_logins_current_month': active_logins_current_month,
            'active_logins_current_date': active_logins_current_date,
            'registration_count': registration_count,
            'active_register_current_date' : active_register_current_date,
        }
        return jsonify(result)

    except Exception as e:
        print(f"Error fetching user and login counts: {str(e)}")
        return jsonify({'error': 'Failed to fetch user and login counts'}), 500
    
#-------------------------api for graphs ---------------    
@app.route("/api/garphusers")
def list_garphusers():
    
    try:
        cur = mysql.connection.cursor()

        #---------------- it displayes Total Active User Login (TAU)-------------------
      
        cur.execute("SELECT COUNT(*) FROM login_status WHERE IsActive = TRUE;")
        total_active_users = cur.fetchone()[0]

        current_time = datetime.datetime.now().strftime('%H:%M')

        result = {
            'total_active_users': total_active_users,
            'current_time': current_time
        }
        return jsonify(result)
    except Exception as e:
        print(f"Error fetching user and login counts: {str(e)}")
        return jsonify({'error': 'Failed to fetch user and login counts'}), 500
    
    
    #--------------------- this is method for logging out the user from the data (it will make the user active false in database)
@app.route('/api/logout', methods=['POST'])
def logout():
    try:
        cur = mysql.connection.cursor()
        current_date = datetime.datetime.now()
        current_date_str = current_date.strftime('%Y-%m-%d')
       
        cur.execute("""
            UPDATE login_status
            SET IsActive = FALSE
            WHERE DATE(LoginTime) = %s
            ORDER BY LoginTime DESC
            LIMIT 1
        """, (current_date_str,))
    
        mysql.connection.commit()

        cur.close()

        return jsonify({'message': 'Successfully logged out and deleted last login'})

    except mysql.connector.Error as e:
        return jsonify({'error': str(e)}), 500
if __name__=='__main__':
    
    app.run(debug=True)
