import "./Dashbd.css";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Footer from "./Footer";
function Dashbd(){
  const location = useLocation();

 
 let username = localStorage.getItem('username');
 if (!username) {
  return (
    <div className="container  " style={{ marginTop: "100px",marginLeft:"250px" }}>
      <h1>You need to login to see this page</h1>
      <p>Please login to access the dashboard.</p>
    </div>
  );
}

  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/user/${username}`)
     .then(response => response.json())
     .then(data => setUserData(data.user_details));
  }, [username]);

    return(
        <>
        <div className="bg-secondary bg-gradient bg-opacity-10 w-80" style={{marginLeft:"250px", marginTop:"30px"}}>
        <div class="card info">
  <div className="card-body mt-5 " style={{marginLeft:"250px"}}>
    <img src="./images/security.png" className="rounded float-start me-3" width="5%" height="5%" ></img>
    <h2 class="card-title ms-5" >Account Information</h2>
    <p class="card-text ms-5" >With supporting text below as a natural lead-in to additional content.</p>
    
  </div>
  
  <div className="d-flex justify-content-evenly align-items-center m-2">
  <div class="card ml-5 mt-4" style={{width: "18rem"}}>
  <img src="./images/user.png" class="card-img-top mx-auto p-2" />
  <div class="card-body">
    <h5 class="card-title">{userData.name}</h5>
    <p class="card-text">{userData.designation} </p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{userData.address}</li>
   
  </ul>
  <div class="card-body">
  <button type="button" class="btn btn-outline-info">Update</button>
  </div>
</div>
<table class="table mr-5 " style={{width:"60%"}}>
  <thead>
   
  </thead>
  <tbody>
    <tr>
      <th scope="row">Employee Id</th>
      <th>{userData.id}</th>
    </tr>
    <tr>
      <th scope="row">Full Name</th>
      <td>{userData.name}</td>
      
    </tr>
    <tr>
      <th scope="row">Email</th>
      <td>{userData.Email}</td>
   
    </tr>
    <tr>
      <th scope="row">Department</th>
      <td colspan="2">{userData.department}</td>
    
    </tr>
  </tbody>
</table>
</div>
        </div>
        </div>
       
        </>
    )
}
export default Dashbd;