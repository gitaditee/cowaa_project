import React from "react";
import { useState } from "react";
import { useEffect,useRef } from "react";
import LineGraph from "./LineGraph";
import axios from "axios";
import { RxCountdownTimer } from "react-icons/rx";

function Card({ title,  images, bgcolor, graphbg }) {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch("http://127.0.0.1:5000/api/users")
    .then((response)=>response.json())
    
      .then((data) => {
        console.log("recieved user", data);
        setUsers(data);
      })
      .catch((error) => {
        console.log("error fetching data", error);
        setError(error.message);
      });
    
  },[]);

  return (
    <>
      <div className={`rounded border border-success d-flex align-item-center justify-evenly border-opacity-10 area-card shadow-lg ${graphbg}  me-5 rounded card mb-3` }
      
      >
        <div className="d-flex" height="50%">
          <div className="align-item-center justify-center ">
            {/* -------------------------- passing the images by props --------------------- */}
            <div
              className={`d-flex align-item-center justify-center shadow bg-light.bg-gradient ${bgcolor} rounded-circle `}
              style={{
                height: "55px",
                width: "55px",
               
              }}
            >
              <img
                style={{ width: "36px", height: "36px", marginLeft:"10px", marginTop:"10px",marginRight:"10px"}}
                src={images}
                alt="menu-img"
              />
            </div>
          </div>
         
            {/* ------------------------------ passing the values by props -------------- */}
            <div className={`${bgcolor} w-80 h-100 text-white rounded-start` } style={{transform:"translateY(-10px)",marginLeft:"80px"}}>

            <div ><b>{title}</b></div>
            </div>
           </div>
               <div className="p-0" style={{marginBottom:"0px"}}>
            {title === "Daily Active User Login (DAU)" ? (
          
            <p className="p-0">{users?.active_logins_current_date}</p>
           
               ) : title === "Monthly Active User Login  (MAU)" ? (
        
            <p>{users?.active_logins_current_month}</p>
          
        ) : title === "Total Active User Login (TAU)" ?(
          
        <p> {users?.total_active_users}</p>
        
        ) :title === "Total Registered Users" ?(
          
          
        <p> {users?.registration_count}</p>
        
        )  : title === "Newly Registered Users " ?(
          
            <p>{users?.active_register_current_date}</p>
          
        ):
          title === "Active Registered Users" ?(
            <p>{users?.total_active_users}</p>
          )
        
        : (
          <p>0</p>
        )}
           </div>
        
     
      <div class="card-footer text-body-secondary text-align-center h-50">
      <RxCountdownTimer />
    updated 1 min ago
  </div>
      </div>
    </>
  );
}
export default Card;