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
            Melospiza can also develop cross-platform mobile apps that can run
            on multiple platforms, such as iOS, Android, and web. This can save
            you development time and costs and help you reach a wider audience.
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
            Melospiza's team of experienced developers can create custom
            websites tailored to the specific needs and goals of their clients.
            They offer both front-end and back-end development services, and can
            work with variety of technologies and platforms.
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
            Melospiza's designers create visually appealing and user-friendly
            interfaces that meet the needs of your target audience. They use
            industry best practices and standards to ensure that the design is
            consistent, accessible, and easy to navigate.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Services;
