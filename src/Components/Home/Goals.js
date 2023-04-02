import React from "react";
import { Row, Col } from "reactstrap";

const AboutUs = () => {
  return (
    <div className="Goals">
      <Row style={{ marginBottom: "60px" }}>
        <Col>
          <h1 className="content1__heading">State of the Art technologies</h1>
          <p className="content">
            Our team of experts make use of the latest technologies in order to
            deliver the best possible results. We strive to create products that
            are not just aesthetically pleasing but also beneficial to your
            business. Our apps are designed to provide a better user experience
            and help you get more customers.
          </p>
        </Col>

        <Col>
          <img
            src={require("../../assests/img1.jpg")}
            alt="melospiza"
            className="content1_Img"
          />
        </Col>
      </Row>

      <Row style={{ marginBottom: "60px" }}>
        <Col
          className="col-lg-6"
          xs={{ span: 12, order: 1 }}
          lg={{ span: 6, order: 2 }}
        >
          <h1 className="content1__heading">Achieve Your Goals With Us</h1>
          <p className="content">
            At Melospiza, we understand your business goals and works towards
            achieving them. We strive to provide you with the best services and
            support. With our team of experts, you can be sure that your
            business will be successful in digital world.
          </p>
        </Col>
        <Col
          className="col-lg-6"
          xs={{ span: 12, order: 2 }}
          lg={{ span: 6, order: 1 }}
        >
          <img
            src={require("../../assests/img2.jpg")}
            alt="melospiza"
            className="content1_Img"
            style={{ width: "20rem" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
