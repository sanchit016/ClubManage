import React from "react";

export default function Carousel() {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoH9YZerD3lVcsJaZQMYw1vAvYpfcKViEY2A&usqp=CAU"
              alt="First slide"
              style={{ height: "400px" }}
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbJKkUnpiMHkmT5_VRwPvNvKVIM0XCdfnTNA&usqp=CAU"
              alt="Second slide"
              style={{ height: "400px" }}
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src=".../800x400?auto=yes&bg=555&fg=333&text=Third slide"
              alt="Third slide"
            />
          </div>
        </div>
      </div>
    </>
  );
}
