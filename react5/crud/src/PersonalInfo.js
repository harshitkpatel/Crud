import React from "react";
import { Form } from "react-bootstrap";


const PersonalInfo = ({ handleChange ,values,first_nameError,last_nameError,genderError }) => {
  
  return (
    <div className="d-flex flex-column align-items-center">
        {console.log("_______________________",values.first_name)}
      <h2>Personal Info</h2>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="First Name"
          onChange={handleChange("first_name")}
          name="first_name"
          value={values.first_name}
        />
      </Form.Group>{first_nameError ? (
            <p style={{ color: "red" }}>Enter your First Name</p>
          ) : (
            <p></p>
          )}
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Last Name"
          onChange={handleChange("last_name")}
          name="last_name"
          value={values.last_name}
        />
      </Form.Group>{last_nameError ? (
            <p style={{ color: "red" }}>Enter your Last Name</p>
          ) : (
            <p></p>
          )}
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="First Name"
          as="select"
          onChange={handleChange("gender")}
          name="gender"
          value={values.gender}
        >
          <option>Male</option>
          <option>Female</option>
        </Form.Control>
      </Form.Group>{genderError ? (
            <p style={{ color: "red" }}>Enter your Gender</p>
          ) : (
            <p></p>
          )}
    </div>
  );
};

export default PersonalInfo;
