import React from 'react';
import { Line } from 'react-chartjs-2';
import { RxCountdownTimer } from "react-icons/rx";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  
} from 'chart.js';


// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,

);
const LineGraph= ({ data ,graphbg,graphdots,graphData}) => {

const dataofgraph = {
  labels: data.labels,
  datasets: [
    {
      label: 'Count',
      data: data.datasets, 
      fill: true,
      borderColor:graphdots,
      tension: 0.02,
      
    },
  ],
}

const options = {
type: 'line',
responsive: true,
scales: {
  x: {
    display: true, 
    title: {
      display: true,
      color:"black"
    },// Hide x-axis labels
    ticks: {
      color: 'black', // Add this line
    },
  },
  y: {
    display: true, // Hide y-axis labels 
    title: {
      display: true,
      text: 'Count',
      color:"black" // Replace with your desired label
    },
    ticks: {
      color: 'black', // Add this line
    },
    
  },
max:10,
},
plugins: {
  legend: {
    display: false, // Hide legend
  },
},
}

return (
<>

<div class="card mt-5 me-3 shadow-lg" style={{width:"80%",height:"100%"}}>

<div >
<div className={` rounded h-100  ms-2 text-dark ${graphbg}`} style={{color:"black" ,height:"300px", width:"100%", padding: 0,transform:"translateY(-40px)"}}>
    <Line data={dataofgraph} options={options} />
    </div>
   

</div>
 <b> <p class="card-text ms-5 me-5">{graphData}</p></b>
 
  <div class="card-footer text-body-secondary mt-4 text-align-center h-50">
    <RxCountdownTimer />
    updated 1 min ago
  
</div>
</div>

</>
);
};
export default LineGraph;