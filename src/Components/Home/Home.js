import React from "react";
import "../../styles/home.css";
import Goals from "../Home/Goals";
import "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Row } from "reactstrap";
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Project from './Projects'
import Form from "../Form/Form";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <section>
      <div className="aa">
        <div className="home">
          <section className="home_title">
            <Row>
              <Col>
                <h1>Dont settle for subpar</h1>
                <h1>User Experience</h1>
                <h4>
                  At Melospiza we specialize in creating Web designs and
                  developing Apps that ensure a better User Experience for our
                  customers
                </h4>
              </Col>
              {/* <Col>
                <div>
                  <img
                    className="home-img"
                    src={require("../../assests/19362653.jpg")}
                    alt='home'
                  />
                </div>
              </Col> */}
            </Row>
          </section>
        </div>
      </div>
      <section>
        <Goals />
        <About/>
        <Services/>
        <Testimonials/>
        <Project/>
        <Form />
        <Footer />
      </section>
    </section>
  );
};

export default Home;
