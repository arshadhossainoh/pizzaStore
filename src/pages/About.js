import React from "react";
import MultiplePizzas from "../images/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          We are 15 years old Pizza Store. We started as a small business and
          grew over time. We pride ourselves in our services and strive to meet
          our customer demands each and every day. We ensure all the ingredients
          in our pizza are fresh and top-notch quality. We greet people with
          smile and love to see us being a small part of their jouney. That's an
          amazing thing, isnt it ? Our customers love to come back to our store
          and let us know how good our pizzas are. we are truly grateful for
          that..As we are growing we now focus on varities on our items so that
          people can taste something new. May be one day you stop by and give it
          a go, will ya ?
        </p>
      </div>
    </div>
  );
}

export default About;
