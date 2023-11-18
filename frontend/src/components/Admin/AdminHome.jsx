import React from "react";
import Sidebar from "./Sidebar";
export default function AdminHome() {
  console.log("AdminHome");
  return (
    <div className="d-flex bg-light">
      <div
        style={{ position: "fixed", height: "75%", width: "20%" }}
        className=" bg-light"
      >
        <Sidebar />
      </div>
      <div
        style={{ backgroundColor: "white", width: "80%", marginLeft: "20%" }}
      >
        AdminHome
      </div>
    </div>
  );
}
