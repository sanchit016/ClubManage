import React from "react";
import Sidebar from "./Sidebar";
export default function AdminHome() {
  return (
    <div className="d-flex">
      <div
        style={{ position: "sticky", height: "100vh", width: "20%" }}
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
