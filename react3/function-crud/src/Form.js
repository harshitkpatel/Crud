import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

export default function UsecrudForm() {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    sName: "",
    gender: "",
    city: "",
    hobby: [],
  });

  const [formDataArray, setFormDataArray] = useState([]);

  const [index, setIndex] = useState();

  const [isEdit, setIsEdit] = useState(true);

  const [fNameError, setFnameError] = useState(false);
  const [lNameError, setLnameError] = useState(false);
  const [sNameError, setSnameError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [hobbyError, setHobbyError] = useState(false);

  const nameHandler = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    setFnameError(false);
    setLnameError(false);
    setSnameError(false);
    setGenderError(false);
    setCityError(false);
  };

  const namecheckHandler = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setFormData((prev) => {
        return {
          ...prev,
          hobby: [...prev.hobby, name],
        };
      });
    } else {
      const getNewdata = JSON.parse(JSON.stringify(formData));
      const newHobby = getNewdata?.hobby.filter((hel) => hel !== name);
      setFormData((prev) => {
        return {
          ...prev,
          hobby: [...newHobby],
        };
      });
    }
    setHobbyError(false);
  };

  const onSubmitData = () => {
    if (
      formData.fName.length === 0 ||
      formData.lName.length === 0 ||
      formData.sName.length === 0 ||
      formData.gender.length === 0 ||
      formData.city.length === 0 ||
      formData.hobby.length === 0
    ) {
      return false;
    } else {
      setFormDataArray(() => {
        return [...formDataArray, formData];
      });
    }
  };

  const validateForm = () => {
    const { fName, lName, sName, gender, city, hobby } = formData;
    switch (true) {
      case fName.length === 0:
        setFnameError(true);
        break;
      case lName.length === 0:
        setLnameError(true);
        break;
      case sName.length === 0:
        setSnameError(true);
        break;
      case gender.length === 0:
        setGenderError(true);
        break;
      case city.length === 0:
        setCityError(true);
        break;
      case hobby.length === 0:
        setHobbyError(true);
        break;
      default:
        break;
    }
  };

  const clearForm = () => {
    setFormData({
      fName: "",
      lName: "",
      sName: "",
      gender: "",
      city: "",
      hobby: [],
    });
  };

  const onDeletData = (i) => {
    formDataArray.splice(i, 1);

    setFormDataArray((prev) => {
      return [...prev];
    });
  };

  const onUpdateData = () => {
    formDataArray.splice(index, 1, formData);
    setFormDataArray((prev) => {
      return [...prev];
    });
  };

  return (
    <div>
      {console.log(formData.hobby)}
      <Container>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              name="fName"
              value={formData.fName}
              onChange={(e) => {
                nameHandler(e);
              }}
            />
          </Form.Group>
          {fNameError ? (
            <p style={{ color: "red" }}>Enter first name</p>
          ) : (
            <p></p>
          )}

          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              name="lName"
              value={formData.lName}
              onChange={(e) => {
                nameHandler(e);
              }}
            />
          </Form.Group>
          {lNameError ? (
            <p style={{ color: "red" }}>Enter last name</p>
          ) : (
            <p></p>
          )}

          <Form.Group className="mb-3">
            <Form.Label>Sur Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Sur Name"
              name="sName"
              value={formData.sName}
              onChange={(e) => {
                nameHandler(e);
              }}
            />
          </Form.Group>
          {sNameError ? (
            <p style={{ color: "red" }}>Enter sur name</p>
          ) : (
            <p></p>
          )}

          <lable>Gender</lable>
          <br></br>
          <div
            onChange={(e) => {
              nameHandler(e);
            }}
          >
            <input
              type="radio"
              value="Male"
              name="gender"
              checked={formData.gender === "Male" ? true : false}
              onChange={(e) => {
                nameHandler(e);
              }}
            ></input>
            <lable>Male</lable>
            <br></br>
            <input
              type="radio"
              value="Female"
              name="gender"
              checked={formData.gender === "Female" ? true : false}
              onChange={(e) => {
                nameHandler(e);
              }}
            ></input>
            <lable>Female</lable>
            <br></br>
            <br></br>
            {genderError ? (
              <p style={{ color: "red" }}>Enter your gender</p>
            ) : (
              <p></p>
            )}
          </div>
          <lable>City</lable>
          <Form.Select
            name="city"
            onChange={(e) => {
              nameHandler(e);
            }}
            value={formData.city}
          >
            <option>Open this select menu</option>
            <option value="Surat">Surat</option>
            <option value="Ahemdabad">Ahemdabad</option>
            <option value="Rajkot">Rajkot</option>
          </Form.Select>
          {cityError ? (
            <p style={{ color: "red" }}>Enter your City</p>
          ) : (
            <p></p>
          )}

          <br></br>
          <div className="mb-3">
            <Form.Label>Hobby</Form.Label>
            <br></br>
            <Form.Check
              inline
              label="Sport"
              name="Sport"
              value="Sport"
              checked={formData.hobby?.includes("Sport")}
              onChange={(e) => namecheckHandler(e)}
            />
            <Form.Check
              inline
              label="Traveling"
              name="Traveling"
              value="Traveling"
              checked={formData?.hobby?.includes("Traveling")}
              onChange={(e) => namecheckHandler(e)}
            />
            <Form.Check
              inline
              label="Cooking"
              name="Cooking"
              value="Cooking"
              checked={formData?.hobby?.includes("Cooking")}
              onChange={(e) => namecheckHandler(e)}
            />
          </div>
          {hobbyError ? (
            <p style={{ color: "red" }}>Enter your hobby</p>
          ) : (
            <p></p>
          )}

          <br></br>
          <br></br>
          {isEdit ? (
            <Button
              variant="primary"
              onClick={(e) => {
                onSubmitData(e);
                clearForm();
                validateForm();
              }}
            >
              Submit
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => {
                onUpdateData();
                setIsEdit(true);
                clearForm();
                validateForm();
              }}
            >
              Update
            </Button>
          )}
        </Form>
        <br></br>
        <table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Sur name</th>
              <th>Gender</th>
              <th>City</th>
              <th>Hobby</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {formDataArray.map((value, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{value.fName}</td>
                <td>{value.lName}</td>
                <td>{value.sName}</td>
                <td>{value.gender}</td>
                <td>{value.city}</td>
                <td>{value.hobby}</td>

                <td>
                  <Button
                    variant="dark"
                    onClick={() => {
                      setIndex(i);
                      setFormData(value);
                      setIsEdit(false);
                    }}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    variant="danger"
                    onClick={() => {
                      onDeletData(i);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
}