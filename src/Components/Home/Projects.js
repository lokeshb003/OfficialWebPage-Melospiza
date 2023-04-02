import React from "react";
import "../../styles/projects.css";
import Anish from "../../assests/anish.png";
import { Col, Row } from "reactstrap";
import PreBooks from "../../assests/probooks.png";

const Projects = () => {
  return (
    <div className="container__projects">
      <h1 className="Projects">Our Projects</h1>
      <Row>
        <Col
          className="col-xs-12 col-lg-5"
          xs={{ span: 12 }}
          lg={{ span: 6 }}
          md={{ span: 5 }}
        >
          <a href="https://anishcashews.com">
            <img src={Anish} alt="anish cashews" className="anishcashews" />
          </a>
        </Col>
        <Col
          className="col-xs-12 col-lg-5"
          xs={{ span: 12 }}
          lg={{ span: 6 }}
          md={{ span: 5 }}
        >
          <img src={PreBooks} alt="anish cashews" className="prebooks" />
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
