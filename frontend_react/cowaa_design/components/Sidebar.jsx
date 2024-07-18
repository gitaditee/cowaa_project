import "./Sidebar.css";
import { GrDocumentPerformance } from "react-icons/gr";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { GrPerformance } from "react-icons/gr";
import { BiMemoryCard } from "react-icons/bi";
import { AiFillDashboard } from "react-icons/ai";

import { MdOutlinePeopleAlt } from "react-icons/md";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Sidebar({ selecttab, setselectab }) {

  let username = localStorage.getItem('username');
  const handleonclick = (tabname) => {
    setselectab(tabname);
  };
  const notifySuccess = () => toast.success("Successfully logged out!");
  const handleLogout=()=>{
    localStorage.removeItem('username');
  axios.post('http://127.0.0.1:5000/api/logout')
    .then(response => {
      notifySuccess();
      
      setTimeout(() => {
        window.location.href = '/login';
      }, 2000);
    })
    .catch(error => {
      console.error('Error logging out:', error);
      toast.error('Error logging out. Please try again later.');
    });

  }
  return (
    <>
      {/* ----------   side bar title ---------------- */}
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bgcolor position-fixed w-1125 l-0"
    
      >
        <a
          href="/"
          className="d-flex align-items-center  link-body-emphasis text-decoration-none  "
        >
          <svg className="bi pe-none me-2" width="16" height="32">
            <use xlink:href="#bootstrap"></use>
          </svg>
          <span className="fs-4">Coins Portal</span>
        </a>
        <hr />

        {/* ------------------ side bar links --------------*/}

        <ul
          class="nav nav-pills d-flex h-full align-text-center justify-between flex-column mb-auto "
          style={{ marginTop: "3rem" }}
        >
          <li
            className="nav-item mb-2 "
            onClick={() => {
              handleonclick("Dashboard Overview");
            }}
          >
            <a
              href="#"
              className={`nav-link d-flex align-text-center justify-center text-center mb-3 ${
                selecttab === "Dashboard Overview" && "active"
              }`}
              
            >
              <div className=" d-flex align-item-center justify-center flex-column text-center ms-2">
                <div>
                  <AiFillDashboard style={{ height: "2rem", width: "2rem" }} />
                </div>
                Dashboard Overview
              </div>
            </a>
          </li>
          <li
            onClick={() => {
              handleonclick("Login Monitoring");
            }}
          >
            <a
              href="#"
              className={`nav-link  d-flex align-text-center justify-center text-center mb-3 ${
                selecttab === "Login Monitoring" && "active"
              }`}
              
            >
              <div className=" d-flex align-item-center justify-center flex-column text-center ms-3">
                <div>
                  <MdOutlinePeopleAlt
                    style={{ height: "2rem", width: "2rem" }}
                  />
                </div>
                Login Monitoring
              </div>  
            </a>
          </li>
        
            
         
        </ul>

        <hr />
        <ul className=" nav nav-pills flex-column ">
          <li>
            
              
               <button  style={{ marginRight: "5px" }}  class="btn btn-light" onClick={handleLogout}> <RiLogoutCircleRLine />Logout</button>
               <ToastContainer />
           
          </li>
        </ul> 
           
       
      </div>
    </>
  );
}
export default Sidebar;