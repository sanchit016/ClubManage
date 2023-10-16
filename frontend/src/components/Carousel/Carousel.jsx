import React from "react";

export default function Carousel() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div
          class="carousel-inner"
          style={{ height: "60vh", width: "98.5vw", margin: "auto" }}
        >
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              style={{ objectFit: "fit", overflow: "hidden" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoH9YZerD3lVcsJaZQMYw1vAvYpfcKViEY2A&usqp=CAU"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoH9YZerD3lVcsJaZQMYw1vAvYpfcKViEY2A&usqp=CAU"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Third slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}
