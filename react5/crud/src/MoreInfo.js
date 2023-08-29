import React from "react";
import { Form } from "react-bootstrap";

const MoreInfo = ({ handleChange, values,hobbyError }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Personal Info</h2>
      <Form.Group className="w-75 mt-4">
        <Form.Label>Hobby</Form.Label>
        <br></br>
        <Form.Check
          inline
          label="Sport"
          name="Sport"
          value="Sport"
          checked={values?.hobby?.includes("Sport")}
          onChange={(e) => handleChange(e)}
        />
        <Form.Check
          inline
          label="Traveling"
          name="Traveling"
          value="Traveling"
          checked={values?.hobby?.includes("Traveling")}
          onChange={(e) => handleChange(e)}
        />
        <Form.Check
          inline
          label="Cooking"
          name="Cooking"
          value="Cooking"
          checked={values?.hobby?.includes("Cooking")}
          onChange={(e) => handleChange(e)}
        />
        <br></br>
        <br></br>
        <Form.Check
          inline
          label="Study"
          name="Study"
          value="Study"
          checked={values?.hobby?.includes("Study")}
          onChange={(e) => handleChange(e)}
        />
        <Form.Check
          inline
          label="Reading Books"
          name="ReadingBooks"
          value="ReadingBooks"
          checked={values?.hobby?.includes("ReadingBooks")}
          onChange={(e) => handleChange(e)}
        />
        <Form.Check
          inline
          label="Coding"
          name="Coding"
          value="Coding"
          checked={values?.hobby?.includes("Coding")}
          onChange={(e) => handleChange(e)}
        />
      </Form.Group>{hobbyError ? (
            <p style={{ color: "red" }}>Enter Check your hobbys</p>
          ) : (
            <p></p>
          )}
    </div>
  );
};

export default MoreInfo;
