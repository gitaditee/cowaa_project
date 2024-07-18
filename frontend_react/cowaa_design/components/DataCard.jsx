import { BsExclamationCircle } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip as ReactTooltip } from 'react-tooltip'

function DataCard({title,images}){

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/count")
      .then((response) => response.json())
      .then((data) => {
        console.log("recieved user", data);
        setUsers(data);
      })
      .catch((error) => {
        console.log("error fetching data", error);
        setError(error.message);
      });
  }, []);
  let tooltipContent;
  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
  switch (title) {
      case ' Total Login ':
       
        tooltipContent = `Total Number of users logged in till date: ${formattedDate}`;
          break;
      case 'Total Registration':
        
          tooltipContent = `Total Number of users Registered in till date: ${formattedDate}`;
          break;
      // Add more cases as needed
      default:
          tooltipContent = 'Default Tooltip';
  }

    return(
           <>
    <div class="card rounded border border-success border-opacity-10 shadow rounded ms-5 mb-3" >
     
  <img class="card-img-top mx-auto p-2  " src={images} style={{width:"100px",transform:"translateY(-50px"}}/>
  
  <div class="card-body row">
  
    <h3 class=" mx-auto">{title} 
   
    <BsExclamationCircle 
    style={{ width: "15px" }} id={`tooltip-${title}`}
     />
  
    <ReactTooltip anchorId={`tooltip-${title}`} place="right"effect="solid" style={{fontSize:"12px", backgroundColor:"grey",width:"50%"}} >
    {tooltipContent ? tooltipContent : 'No tooltip content available'}

    </ReactTooltip>
      </h3>
    
    {title === " Total Login " ? (
          <b>
            <p className="card-text mx-auto">{users?.total_active_users}</p>
          </b>
        ) : title === "Total Registration" ? (
          <b>
            <p className="card-text mx-auto">{users?.registration_count}</p>
          </b>
        ) : (
          <p className="card-text mx-auto">No data available</p>
        )}
    <div class="container text-center">
    <div class="row">
    <div class="col">
       Daily Active User  

    </div>
    <div class="col">
      Monthly Active User
    </div>  
  </div>
  </div>
   
    <p class="card-text"><small class="text-body-secondary">Last updated 1 mins ago</small></p>
  </div> 
  </div> 

        </>
    )
}
export default DataCard;
