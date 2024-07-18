import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Header2 from "./Header2";
import "./image.css";
import Footer from "./Footer";
import { useState } from "react";
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
function Login() {
  const navigate = useNavigate();
  const [ischecked, setischecked] = useState();
  const [password,setPassword]=useState();
  const [username, setusername] = useState();
  const [message, setMessage] = useState('');
  const [userDetails, setUserDetails] = useState({});
  const notifySuccess = () => toast.success("Successfully logged in!");
  const handleLogin = (event) => {
    event.preventDefault();
   
    axios.post('http://127.0.0.1:5000/login', {
        email_id: username,
        password: password,
    })
    .then((response) => {
        if (response.data.message === 'Successfully logged in') {
            // Redirect to home page
            localStorage.setItem('username', username);
            notifySuccess();
            setTimeout(() => {
              navigate('/',{ state: { username } });
            }, 3000);
           
            axios.get(`http://127.0.0.1:5000/user/${username}`)
            .then((response) => {
              const userData = response.data.user_details;
              setusername(userData.Email);
              setUserDetails(userData);
             })
            .catch((error) => {
               console.error(error);
             });
         
        } else {
            setMessage(response.data.message);
        }
    })
    .catch((error) => {console.error(error)});
    
  };


  const submitform = (event) => {
    event.preventDefault();
    alert("login successfully");
  };

  function onChange(value) {
    console.log("Captcha value:", value);
    setischecked(true);
  }
  const handleUsernameChange = (event) => {
    setusername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  useEffect(() => {
    if (message === "Invalid credentials") {
      toast.error(message);
    }
  }, [message]);
  return (
    <>
      <Header></Header>
      <Header2></Header2>
      {/* ------------------------------------- login card--------------------------------- */}

      <div
        class="d-flex justify-content-center align-items-center vh-90 vw-100"
          style={{
            width:"100vw",
            height:"90vh",

          }} >
          <div
        class="card shadow rounded bg-primary bg-gradient bg-opacity-25"
        style={{
          width: "840px",
          height: "400px",
      
        }}
      >
        <div class="row" style={{height:"100%"}}>
          <div class="col-md-4 rounded h-full" style={{backgroundColor:"rgba(23,73,115,255)"}}>
            <img src="./images/3556960.jpg" class="img-fluid rounded " style={{marginTop:"60px"}} />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Login Page</h5>

              {/* ---------------------------- login form --------------------------------------- */}
              <form onSubmit={submitform}>
                <div class="row mb-3">
                  <label for="inputEmail3" class=" col-form-label">
                    Email
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="email"
                      class="form-control"
                      value={username}
                      onChange={handleUsernameChange}
                      id="inputEmail3"
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputPassword3" class=" col-form-label">
                    Password
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="password"
                      value={password}
                      class="form-control"
                      onChange={handlePasswordChange}
                      id="inputPassword3"
                    />
                  </div>
                </div>
                <ReCAPTCHA
                  sitekey="6LeqLgUqAAAAAKRqpYjzY3mOpEkLTDeyqzbEsdcT"
                  onChange={onChange}
                />

                <button
                  type="submit"
                  class="btn login-btn "
                  onClick={handleLogin }
                  
                >
                  Log in
                </button>
                {username && <p>Welcome, {username}!</p>}
               
                <ToastContainer />   
               
              </form>
            </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer></Footer>
    </>
  );
}
export default Login;