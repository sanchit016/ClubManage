import React from "react";
import Sidebar from "./Sidebar";
export default function AdminHome() {
  console.log("AdminHome");
  return (
    <div className="d-flex">
      <div
        style={{ position: "sticky", height: "100%", width: "20%" }}
        className=" bg-light"
      >
        <Sidebar />
      </div>
      <div
        style={{ backgroundColor: "#071e3d", width: "80%" }}
      >
        AdminHome
      </div>
    </div>
  );
}
