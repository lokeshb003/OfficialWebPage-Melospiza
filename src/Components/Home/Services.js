import React from "react";
import { Row, Col } from "reactstrap";
import "./../../styles/services.css";
const Services = () => {
  return (
    <div style={{ backgroundColor: "white" }} id="services">
      <Row>
        <Col className="col-lg-5">
          <div className="services">
            <img
              src={require("../../assests/app.jpeg")}
              alt="melospiza_startup"
            />
          </div>
        </Col>
        <Col className="col-lg-7 services_content">
          <h1>App Development</h1>
          <p>
            Our app development services are made to make it simple for you to
            reach your mobile audience. In order to provide seamless user
            experiences, we develop native and hybrid mobile apps for iOS and
            Android devices.
          </p>
        </Col>
      </Row>
      <Row>
        <Col
          className="col-lg-7 services_content"
          xs={{ order: 2, span: 12 }}
          lg={{ order: 1, span: 7 }}
        >
          <h1>Web Development</h1>
          <p>
            We provide professional web development services that are customised
            to your specific requirements. Our team of skilled developers builds
            responsive, effective websites with the help of the newest
            technology.
          </p>
        </Col>
        <Col
          className="col-lg-5"
          xs={{ order: 1, span: 12 }}
          lg={{ order: 2, span: 7 }}
        >
          <div className="services">
            <img
              src={require("../../assests/web.jpg")}
              alt="melospiza_startup"
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col
          className="col-lg-5"
          xs={{ span: 12, order: 1 }}
          lg={{ order: 1, span: 5 }}
        >
          <div className="services">
            <img
              src={require("../../assests/ui.jpg")}
              alt="melospiza_startup"
            />
          </div>
        </Col>
        <Col
          className="col-lg-7 services_content"
          xs={{ order: 2, span: 12 }}
          lg={{ order: 2, span: 7 }}
        >
          <h1>UI Development</h1>
          <p>
            Our UI/UX services are concentrated on giving your users the
            greatest experience possible. Our team makes sure that every element
            of your website or app is developed with the user in mind, from
            wireframing and prototyping through design and production.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Services;
