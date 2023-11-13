import React from "react";
import Sidebar from "./Sidebar";
export default function AdminHome() {
  console.log("AdminHome")
  return (
    <div className="d-flex">
      <div style={{ position: "sticky", height: "100vh" }} className=" bg-light">
        <Sidebar />
      </div>
      <div>AdminHome</div>
    </div>
  );
}
