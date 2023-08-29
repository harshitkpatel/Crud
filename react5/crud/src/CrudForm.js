import React, { useEffect, useState } from "react";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import LocationInfo from "./LocationInfo";
import MoreInfo from "./MoreInfo";
import { useSelector, useDispatch } from "react-redux";
import { addData, editData } from "./store/slice/createSlice";
import { useNavigate } from "react-router-dom";

const MultiForm = () => {
  const state = useSelector((state) => state.submit);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [isEdit, setIsEdit] = useState(true);
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    email: "",
    phone_number: "",
    city: "",
    state: "",
    hobby: [],
  });

  const [first_nameError, setfirst_nameError] = useState(false);
  const [last_nameError, setlast_nameError] = useState(false);
  const [genderError, setgenderError] = useState(false);
  const [emailError, setemailError] = useState(false);
  const [phone_numberError, setphone_numberError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [hobbyError, setHobbyError] = useState(false);
  const [stateError, setstateError] = useState(false);

  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    } else if (step === 4) {
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
    setfirst_nameError(false);
    setlast_nameError(false);
    setgenderError(false);
    setemailError(false);
    setphone_numberError(false);
    setCityError(false);
    setstateError(false);
  };
  const handleCheackChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setValues((prev) => {
        return {
          ...prev,
          hobby: [...prev.hobby, name],
        };
      });
    } else {
      const getNewdata = JSON.parse(JSON.stringify(values));
      const newHobby = getNewdata?.hobby.filter((hel) => hel !== name);
      setValues((prev) => {
        return {
          ...prev,
          hobby: [...newHobby],
        };
      });
    }
    setHobbyError(false);
  };

  const clearForm = () => {
    setValues({
      first_name: "",
      last_name: "",
      gender: "",
      email: "",
      phone_number: "",
      city: "",
      state: "",
      hobby: [],
    });
  };

  const validateForm = () => {
    const {
      first_name,
      last_name,
      email,
      gender,
      city,
      hobby,
      phone_number,
      state,
    } = values;
    switch (true) {
      case first_name.length === 0:
        setfirst_nameError(true);
        break;
      case last_name.length === 0:
        setlast_nameError(true);
        break;
      case gender.length === 0:
        setgenderError(true);
        break;
      case email.length === 0:
        setemailError(true);
        break;
      case city.length === 0:
        setCityError(true);
        break;
      case state.length === 0:
        setstateError(true);
        break;
      case hobby.length === 0:
        setHobbyError(true);
        break;
      case phone_number.length === 0:
        setphone_numberError(true);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    setIsEdit(state.isEdit);

    if (state.isEdit === false) {
      setValues({
        first_name: state.values.first_name,
        last_name: state.values.last_name,
        gender: state.values.gender,
        email: state.values.email,
        phone_number: state.values.phone_number,
        city: state.values.city,
        state: state.values.state,
        hobby: state.values.hobby,
        uniqeKey: state.values.uniqeKey,
      });
    } else {
      setValues({
        first_name: "",
        last_name: "",
        gender: "",
        email: "",
        phone_number: "",
        city: "",
        state: "",
        hobby: [],
      });
    }
  }, []);
  return (
    <div className="bg-dark vh-100">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card p-3 w-50 mt-5">
          {
            {
              1: (
                <PersonalInfo
                  handleChange={handleChange}
                  values={values}
                  first_nameError={first_nameError}
                  last_nameError={last_nameError}
                  genderError={genderError}
                />
              ),
              2: (
                <ContactInfo
                  handleChange={handleChange}
                  values={values}
                  emailError={emailError}
                  phone_numberError={phone_numberError}
                />
              ),
              3: (
                <LocationInfo
                  handleChange={handleChange}
                  values={values}
                  cityError={cityError}
                  stateError={stateError}
                />
              ),
              4: (
                <MoreInfo
                  handleChange={handleCheackChange}
                  values={values}
                  hobbyError={hobbyError}
                />
              ),
            }[step]
          }
          <div className="d-flex justify-content-around px-5 mt-5">
            {step > 1 ? (
              <button className="btn btn-warning" onClick={prevStep}>
                Back
              </button>
            ) : null}

            {step === 4 ? (
              <button
                className="btn btn-warning"
                onClick={() => {
                  if (isEdit === true) {
                    validateForm();
                    if (
                      values.first_name === "" ||
                      values.last_name === "" ||
                      values.email === "" ||
                      values.gender === "" ||
                      values.city === "" ||
                      values.hobby.length === 0 ||
                      values.phone_number === "" ||
                      values.state === ""
                    ) {
                      return false;
                    } else {
                      dispatch(addData(values));
                      clearForm();

                      navigate("/table");
                    }
                  } else {
                    dispatch(editData(values));
                    clearForm();

                    setIsEdit(true);
                    navigate("/table");
                    validateForm();
                  }
                }}
              >
                {isEdit ? "Submit" : "Update"}
              </button>
            ) : (
              <button
                className="btn btn-warning"
                onClick={() => {
                  nextStep();
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default MultiForm;
