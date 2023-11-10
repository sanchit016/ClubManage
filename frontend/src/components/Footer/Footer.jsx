import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="foot  text-center ">
      <div
        className="text-center p-3"
        style={{
          backgroundColor: " #294a50",
          color: "white",
          zIndex: "100000000",
        }}
      >
        © 2023 Copyright:
        <p className="text-white">..</p>
      </div>
    </MDBFooter>
  );
}
