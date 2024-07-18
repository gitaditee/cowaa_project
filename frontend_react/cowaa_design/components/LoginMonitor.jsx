import { useState } from "react";
import Card from "./Card";
import "./LoginMonitor.css";
import DataCard from "./DataCard";
import LoginChart from "./LoginChart";
import { useEffect } from "react";
import AreaLineGraph from "./AreaLineGraph";
import LineGraph from "./LineGraph";
import axios from "axios";
import Footer from "./Footer";

function LoginMonitor() {
  //  ------------------------ data -------------------
  const [users, setuser] = useState([]);
  const [error, seterror] = useState(null);
  const [dataofmonth, setDataofmonth] = useState([]);
  const [dataoftoday, setDataoftoday] =useState([]);
  const [xAxisKey, setXAxisKey] = useState('month');
  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("recieved user", data);
        setuser(data.users);
      })
      .catch((error) => {
        console.log("error fetching data", error);
        seterror(error.message);
      });
  }, []);
 
  const [dataofgraph, setdata] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/registration_counts')
      .then(response => {
        // Transform the data if necessary
        const transformedData = response.data.map(item => ({
          month: item.month,
          count: item.count,
        }));
        setDataofmonth(transformedData);
        setDataOfGraph(transformedData); 
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/login_counts')
      .then(response => {
        // Transform the data if necessary
        const transformedData = response.data.map(item => ({
          date: item.timeofdate,
          count: item.count,
        }));
        setDataoftoday(transformedData);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);
  const [data, setData] = useState([]);
  const [dailygraphData, setdailyGraphData] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:5000/dataofdailyactivegraph")
      .then(response => response.json())
      .then(data => {
        setData(data.data);
        const graphData = data.data.reduce((acc, item) => {
          acc.labels.push(item.date_interval);
          acc.datasets.push(item.active_user_count);
          return acc;
        }, { labels: [], datasets: [] });
        setdailyGraphData(graphData);
      });
  }, []);


  const [weekdata, setweekData]=useState([]);
  const [weeklygraphData,setweeklyGraphData]=useState({});
  useEffect(() =>{
  fetch("http://127.0.0.1:5000/dataofweeklyactivegraph")
    .then(response => response.json())
    .then(data =>{
      setweekData(data.data);
      const weeklygraphdata = data.data.reduce((acc, item)=>{
        acc.labels.push(item.week_interval);
        acc.datasets.push(item.user_count);
        return acc;
      },{
        labels :[], datasets :[]
      });
    setweeklyGraphData(weeklygraphdata);
    });
    },[]);

    const [totaldaysdata,settotaldays] = useState([]);
    const [totaldaysgraphdata ,settotaldaysgraphdata] = useState([]); 
    useEffect(() => {
  fetch("http://127.0.0.1:5000/dataof15dayinterval")
   .then(response => response.json())
   .then(data => {
    settotaldays(data.data);
      const totaldaysgraphdata = data.data.reduce((acc, item) => {
        acc.labels.push(item.days_interval);
        acc.datasets.push(item.user_count);
        return acc;
      }, { labels: [], datasets: [] });
      settotaldaysgraphdata(totaldaysgraphdata);
    });
    }, []);
  const cards = [
    {
      bgcolor: "bg-danger opacity-75",
      images: "./images/dailyuser.png",
      title: "Daily Active User Login (DAU)",
      graphbg: "bg-danger-subtle",
      graphdots:"red",   
      graphData: "Daily Active User Trend Graph Data"
    },
    {
      bgcolor:"bg-success opacity-75",
      images: "./images/monthlyuser.png",
      title: "Monthly Active User Login  (MAU)",
      graphbg: "bg-success-subtle",
      graphdots:"green",  
      graphData:"Weekly Active User Trend Graph Data"
    },
    {
      bgcolor: "bg-warning opacity-75",
      images: "./images/total.png",
      title: "Total Active User Login (TAU)",
      graphbg: "bg-warning-subtle",
      graphdots:"purple",
      graphData:"FortNight Active User Trend Graph Data"
    },
   
  ];


  const datacard = [
    {
      images: "./images/datareg.png",
      title: " Total Login ",
      value: "55",
      val1: "Daily Active User",
      val2: "Monthly Active User",
    },
    {
      images: "./images/datalogin.png",
      title: "Total Registration",
      value: "60",
      val1: " Daily ActiveUser",
      val2: "Monthly Active User",
    },
  ];
  const [dataOfGraph, setDataOfGraph] = useState(dataofmonth);
 const showmonthlygraph=()=>{
    setDataOfGraph(dataofmonth);
    setXAxisKey('month');
 };
 const showtodaygraph=()=>{
  setDataOfGraph(dataoftoday);
  setXAxisKey('date');
 };
  return (
    <>

      <div className="bg-secondary bg-gradient bg-opacity-10 w-90 h-100 "style={{marginLeft:"200px"}}>
      <div className="d-flex flex-row align-items-center ms-5">
      <div
            className="bg-white rounded-3 shadow rounded mt-5 ms-3 mb-3 w-90 "
            
          >
            <div className="container text-center">
              {/* ------------------------ passing values in form map from api --------------------------> */}
              <div className="row row-cols-3  ">
               
                {cards.map((card) => (
                  <div key={card && card.title} className="col">
                    <Card
                      bgcolor={card.bgcolor}
                      images={card.images}
                      title={card.title}
                      content={card.value}
                      graphbg={card.graphbg}
                    />
                  </div>
                ))}
              </div>
          </div>
          </div>

        
            </div>
            <div className="d-flex flex-row align-items-center ms-3 mt-5">
            <div className=" d-flex flex-row">
              
          
            <LineGraph data={dailygraphData}  graphbg={cards[0].graphbg} graphData={cards[0].graphData} graphdots={cards[0].graphdots} />
           
            
            <LineGraph data={weeklygraphData} graphbg={cards[1].graphbg} graphData={cards[1].graphData} graphdots={cards[1].graphdots}/>
          
              <LineGraph data={totaldaysgraphdata} graphbg={cards[2].graphbg} graphData={cards[2].graphData} graphdots={cards[2].graphdots}/>

            </div>     
            <div
              className="bg-white rounded-3 shadow rounded "
              style={{ width: "30%"}}
            >
              <div>
                <div class="d-flex justify-content-between align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <h5 class="h5 ">Login Trends</h5>
                </div>
                <div  className=" me-1 t-0">
                  <LoginChart></LoginChart>
                </div>
            
        </div>
       
            </div> 
            </div>  
            <div
          className="bs-secondary-color container text-center row row-cols-2"
          style={{ marginTop: "50px", width: "600%" }}
        >
          {datacard.map((datacards) => (
            <div className="col">
              <DataCard
                title={datacards.title}
                val1={datacards.val1}
                val2={datacards.val2}
                images={datacards.images}
                value={datacards.value}
              ></DataCard>
            </div>
          ))}
        </div>
     
        
<div
        className="bg-secondary bg-gradient bg-opacity-10 w-100 h-60" 
     
      >
        <div
          className="bg-white  rounded-3 shadow rounded w-100"
          
        >
          <div>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h5 class="h5 " style={{ marginLeft: "40px" }}>
                Registeration Trends
              </h5>
              <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group me-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    onClick={showtodaygraph}
                  >
                    Today
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    onClick={showmonthlygraph}
                  >
                    Monthly
                  </button>
                </div>
              </div>
            </div>
            <div style={{ marginLeft: "10px" }}>
                <AreaLineGraph data={dataOfGraph} xAxisKey={xAxisKey}></AreaLineGraph>
            </div>
          </div>
        </div>
      </div>
</div>
            
       
      
    
    </>
  );
}
export default LoginMonitor;