import React from "react";
import { Form } from "react-bootstrap";

const LocationInfo = ({ handleChange,values,cityError,stateError }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Location Info</h2>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="State"
          onChange={handleChange("state")}
          name="state"
          value={values.state}
        />
      </Form.Group>{cityError ? (
            <p style={{ color: "red" }}>Enter your City</p>
          ) : (
            <p></p>
          )}
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="City"
          onChange={handleChange("city")}
          name="city"
          value={values.city}
        />
      </Form.Group>{stateError ? (
            <p style={{ color: "red" }}>Enter your State</p>
          ) : (
            <p></p>
          )}
    </div>
  );
};

export default LocationInfo;
