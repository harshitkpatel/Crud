import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { addData, editData } from "./store/slice/createSlice";
import Modal from "react-bootstrap/Modal";
// import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function UsecrudForm() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [updateShow, setUpdateShow] = useState(false);
  const handleUpdateClose = () => setUpdateShow(false);
  const handleUpdateShow = () => setUpdateShow(true);

  const state = useSelector((state) => state.submit);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    sName: "",
    gender: "",
    city: "",
    hobby: [],
    birthday: "",
  });

  // const [formDataArray, setFormDataArray] = useState([]);
  const [fNameError, setFnameError] = useState(false);
  const [lNameError, setLnameError] = useState(false);
  const [sNameError, setSnameError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [hobbyError, setHobbyError] = useState(false);
  const [birthdayError, setbirthdayError] = useState(false);

  const [isEdit, setIsEdit] = useState(true);

  const nameHandler = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    setFnameError(false);
    setLnameError(false);
    setSnameError(false);
    setGenderError(false);
    setCityError(false);
    setbirthdayError(false);
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

  const clearForm = () => {
    setFormData({
      fName: "",
      lName: "",
      sName: "",
      gender: "",
      city: "",
      hobby: [],
      birthday: "",
    });
  };

  const validateForm = () => {
    const { fName, lName, sName, gender, city, hobby, birthday } = formData;
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
      case birthday.length === 0:
        setbirthdayError(true);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setIsEdit(state.isEdit);
    if (state.isEdit === false) {
      setFormData({
        fName: state.formData.fName,
        lName: state.formData.lName,
        sName: state.formData.sName,
        gender: state.formData.gender,
        city: state.formData.city,
        hobby: state.formData.hobby,
        birthday: state.formData.birthday,
        uniqeKey: state.formData.uniqeKey,
      });
    }
  }, []);

  return (
    <div>
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
          <div>
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
            {hobbyError ? (
              <p style={{ color: "red" }}>Enter your hobby</p>
            ) : (
              <p></p>
            )}
          </div>
          <div>
            <label for="birthday">Birthday :</label>{" "}
            <input
              type="date"
              id="birthday"
              name="birthday"
              onChange={(e) => {
                nameHandler(e);
              }}
              value={formData.birthday}
            />
          </div>
          {birthdayError ? (
            <p style={{ color: "red" }}>Enter your birthdate</p>
          ) : (
            <p></p>
          )}
          <br></br>
          <br></br>
          {isEdit ? (
            <Button
              variant="primary"
              onClick={(e) => {
                validateForm();
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
                  handleShow();
                }
              }}
            >
              Submit
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => {
                handleUpdateShow();
              }}
            >
              Update
            </Button>
          )}
        </Form>
        <br></br>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, You want save your data on Table!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button
            variant="primary"
            onClick={() => {
              dispatch(addData(formData));
              clearForm();
              navigate("/table");
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={updateShow} onHide={handleUpdateClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You are Update your data on Successfully on Table!
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              dispatch(editData(formData));
              clearForm();
              validateForm();
              setIsEdit(true);
              navigate("/table");
              handleUpdateClose();
            }}
          >
            Close
          </Button>

          <Button
            variant="primary"
            onClick={() => {
              dispatch(editData(formData));
              clearForm();
              validateForm();
              setIsEdit(true);
              navigate("/table");
            }}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
