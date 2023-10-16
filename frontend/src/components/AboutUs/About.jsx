import React from "react";
import Carousel from "../Carousel/Carousel";
export default function About() {
  return (
    <>
      <Carousel />
      <section
        className=" mt-3 "
        style={{ "background-color": "#eee", padding: "10px" }}
      >
        <div
          className="d-flex justify-content-between"
          style={{ padding: "15px" }}
        >
          <div className="" style={{ width: "40%", padding: "5%" }}>
            <img src="..." alt=" image1" />
          </div>
          <div style={{ width: "40%", padding: "2%" }}>
            <h2 className="mb-5">Heading 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis in
              fugit laudantium eligendi aperiam. Ut harum quasi deserunt sequi,
              fugit temporibus veritatis ad obcaecati architecto tenetur unde
              quisquam corrupti expedita. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Recusandae harum deleniti cum ipsam
              dolorem, dolores nisi perspiciatis minus nihil dolorum quis quo
              aspernatur molestiae minima quas earum facere praesentium
              corporis?
            </p>
          </div>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ padding: "15px" }}
        >
          <div style={{ width: "40%", padding: "2%" }}>
            <h2 className="mb-5">Heading 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis in
              fugit laudantium eligendi aperiam. Ut harum quasi deserunt sequi,
              fugit temporibus veritatis ad obcaecati architecto tenetur unde
              quisquam corrupti expedita. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Recusandae harum deleniti cum ipsam
              dolorem, dolores nisi perspiciatis minus nihil dolorum quis quo
              aspernatur molestiae minima quas earum facere praesentium
              corporis?
            </p>
          </div>
          <div className="" style={{ width: "40%", padding: "5%" }}>
            <img src="..." alt=" image1" />
          </div>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ padding: "15px" }}
        >
          <div className="" style={{ width: "40%", padding: "5%" }}>
            <img src="..." alt=" image1" />
          </div>
          <div style={{ width: "40%", padding: "2%" }}>
            <h2 className="mb-5">Heading 3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis in
              fugit laudantium eligendi aperiam. Ut harum quasi deserunt sequi,
              fugit temporibus veritatis ad obcaecati architecto tenetur unde
              quisquam corrupti expedita. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Recusandae harum deleniti cum ipsam
              dolorem, dolores nisi perspiciatis minus nihil dolorum quis quo
              aspernatur molestiae minima quas earum facere praesentium
              corporis?
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
