import React from "react";
import Sidebar from "./Sidebar";
export default function AdminHome() {
  return (
    <div className="d-flex">
      <div style={{ position: "fixed", height: "75%" }} className=" bg-light">
        <Sidebar />
      </div>
      <div>AdminHome</div>
    </div>
  );
}
