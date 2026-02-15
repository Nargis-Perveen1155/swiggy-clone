import React from "react";

const About = () => {
  return (
    <div id="about-main-cont">
      <div id="about-content-cont">
        <div id="about-content">
          <h1>Fast food delivery in town</h1>
          <p>
            We connect you to delivering your food with in 30 mins if we would
            late we will give the food free
          </p>
          <h5>Free delivery for first 5 orders</h5>

          <div id="about-img-cont">
            {" "}
            <img src="https://ik.imagekit.io/z5jdpqno5/icons.avif" alt="" />
            <img src="https://ik.imagekit.io/z5jdpqno5/icons2.avif" alt="" />
          </div>
        </div>
        <div id="back-img-cont">
          <img
            src="https://ik.imagekit.io/z5jdpqno5/png%20about%20img.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
