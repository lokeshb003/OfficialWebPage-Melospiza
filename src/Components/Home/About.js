import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import "./../../styles/about.css";
const About = () => {
  const [display, setDisplay] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [TextLine, setTextLine] = useState("");
  const [complete, setcomplete] = useState("At Melospiza, we understand your business goals and works towards achieving them. We strive to provide you with the best services and support. With our team of experts, you can be sure that your business will be successful in digital world.")
  const [index, setIndex] = useState(0);
  const revealText = () => {
    setReveal(!reveal);
    setDisplay(!display);
    
  };
useEffect(()=>{
  if(index < complete.length){
    setTimeout(() => {
      setTextLine(TextLine + complete[index])
      setIndex(index + 1)
    }, 60)
  }
}, [index])
 
  
  return (
    
    <div id="about">
      <Row>
        <Col className="col-lg-3">
          <div>
            <img
              src={require("../../assests/logo.png")}
              alt="melospiza"
              className="Melospiza__logo"
            />
          </div>
        </Col>

        <Col>
          {!display && <button onClick={revealText} className="reveal__button">Reveal</button>}
          {reveal && (
            <p className="aboutUs">
              {TextLine}
            </p>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default About;

