import React from "react";
import "./index.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ContactComponent() {
    return (
        <main className="contact-bg">
          <Form className="contact" >
        <br>
        </br>
        <div>
            <br>
            </br>
        <h1 className="contact-header">Contact Me</h1>
        <Form.Group controlId="formBasicEmail">
            <br>
            </br>
          <Form.Label>Name</Form.Label>
          <Form.Control className="contact-name"   type="name" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email"  placeholder="dgktheflutist@gmail.com" />
        </Form.Group>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">
            Message
            </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          />
        </div>
        </div>
        <Button className="button" variant="secondary" type="submit">
          Submit
  </Button>
      </Form>
        </main>
    )
}
export default ContactComponent;