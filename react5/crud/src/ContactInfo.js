import React from "react";
import { Form } from "react-bootstrap";

const ContactInfo = ({ handleChange ,values,emailError,phone_numberError }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Contact Info</h2>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Email"
          onChange={handleChange("email")}
          name="email"
          value={values.email}
        />
      </Form.Group>{emailError ? (
            <p style={{ color: "red" }}>Enter your Email</p>
          ) : (
            <p></p>
          )}
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Phone Number"
          onChange={handleChange("phone_number")}
          name="phone_number"
          value={values.phone_number}
        />
      </Form.Group>{phone_numberError ? (
            <p style={{ color: "red" }}>Enter your Number</p>
          ) : (
            <p></p>
          )}
    </div>
  );
};

export default ContactInfo;
