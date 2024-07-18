import { useState } from "react";
import "./Home.css";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Header2 from "../components/Header2";
import Sidebar from "./Sidebar.jsx";
import Dashbd from "../components/Dashbd";

import LoginMonitor from "../components/LoginMonitor";
import Login from "./Login";

function Home() {
  const [selecttab, setselectab] = useState("Dashboard Overview");
  return (
    <>
      {/*  ------------ side bar --------- */}
      <div className="container-app">
        <Sidebar selecttab={selecttab} setselectab={setselectab}></Sidebar>

        {/* -------- header bar--------------- */}
        <div className="header-app">
          <Header></Header>

          <Header2></Header2>
          {/*  ---------- side bar links ---------- */}
          {selecttab === "Dashboard Overview" ? (
            <Dashbd></Dashbd>
          ) : selecttab === "Login Monitoring" ? (
            <LoginMonitor></LoginMonitor>
          ) : null}
        </div>
      </div>
    </>
  );
}
export default Home;
