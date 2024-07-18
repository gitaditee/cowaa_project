
import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';
import axios from 'axios';
import { useState, useEffect } from 'react';
function LoginChart(){
  const [dataoftoday, setDataoftoday] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/login_counts_by_month')
      .then(response => {
        // Transform the data if necessary
        const transformedData = response.data.map(item => ({
          month: item.month,
          count: item.login_count,
        }));
        setDataoftoday(transformedData);
        
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);
    return (
      <ResponsiveContainer width="100%" height={260} >
      <LineChart
        width={300}
        height={550}
        data={dataoftoday}
        margin={{
          top: 10,
          right: 10,
          
          bottom: 20,
        }}
      >
         <CartesianGrid strokeDasharray=" 1 1" />
        <XAxis dataKey="month" label={{ value: 'month', position: 'insideBottom', offset: -10 }} />
        <YAxis label={{ value: 'count', angle: -90, position: 'insideLeft' }} />
        <Tooltip cursor={{ strokeDasharray: '1 1' }} contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}/>
        <Line type="monotone" dataKey="count" stroke="red" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
    );
  }
  export default LoginChart;