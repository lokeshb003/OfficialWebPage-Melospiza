import React from "react";
import { Row, Col } from "reactstrap";
import '../../styles/form.css'
const Form = () => {
  return (
    <div>
        <h3 className="contactUs__title" >Get in touch with Us</h3>
      <Row>
        <Col>
        <form action="https://formspree.io/f/xvoyorlk" method="POST">
          <div className="text_field">
            <label for="name">Name</label>
            <input
              type={"name"}
              placeholder="First Name"
              name="Name"
              required
            />
          </div>

          <div className="text_field">
            <label for="emailid">Email ID</label>
            <input
              type={"email"}
              placeholder="your@gmail.com"
              name="email"
              required
            />
          </div>

          <div className="text_field">
            <label for="Phone number">Mobile Number</label>
            <input
              type={"number"}
              placeholder="Mobile number"
              name="number"
              required
            />
          </div>
          <div className="text_field">
            <label for="text">Message</label>
            <div>
              <textarea type="text" name="message" required />
            </div>
          </div>

          <button type="submit" className="submit">Submit</button>
        </form>
        </Col>
      </Row>
    </div>
  );
};

export default Form;
