import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Table from "react-bootstrap/Table";

const Home = () => {
  const [formDataArray, setFormDataArray] = useState([]);

  const [isEdit,setIsEdit] = useState(false);
  const [index, setIndex] = useState()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    formDataArray.push(data);
    e.target.reset();
    setIsEdit(false);
    
  };

  const editData = (i) => {
    if (formDataArray[i]) {
      const editedData = formDataArray[i];
      reset(editedData)
    }
    setIsEdit(true);
    setIndex(i)
  };

  const deletData = (i) => {
    formDataArray.splice(i, 1);

    setFormDataArray((prev) => {
      return [...prev];
    });
  };

  const updateData = (data,e) =>{
    
    formDataArray.splice(index, 1, data);
    setFormDataArray((prev) => {
      return [...prev];
    });
    setIsEdit(false);
    e.target.reset();
  }
  
  return (
    <div className="container">
      <form onSubmit={isEdit? handleSubmit(updateData) :  handleSubmit(onSubmit)}>
        <div className="form-row form-group">
          <div className="col">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your First name"
              name="firstName"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <span style={{ color: "red" }}>Please Enter your First Name</span>
            )}
          </div>
          <br></br>
          <div className="col">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Last name"
              name="lastName"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && (
              <span style={{ color: "red" }}>Please Enter your last Name</span>
            )}
          </div>
          <br></br>
          <div className="col">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              name="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span style={{ color: "red" }}>Please Enter your Email</span>
            )}
          </div>
          <br></br>
          <div className="col">
            <label>Select Your State</label>
            <select
              className="form-control"
              id="state"
              {...register("State", { required: true })}
            >
              <option value="">Select Your State</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Bihar">Bihar</option>
              <option value="Assam">Assam</option>
              <option value="Goa">Goa</option>
              <option value="Manipur">Manipur</option>
            </select>
            {errors.State && (
              <span style={{ color: "red" }}>Please Enter your state</span>
            )}
          </div>
          <br></br>
          <div className="col">
            <label>Gender</label>
            <br></br>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="male"
                value="male"
                {...register("gender", { required: true })}
              />
              <label className="form-check-label">male</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="female"
                value="female"
                {...register("gender", { required: true })}
              />
              <label className="form-check-label">female</label>
            </div>
            {errors.gender && (
              <span style={{ color: "red" }}>Please Enter Your Gender</span>
            )}
          </div>
          <br></br>
          <div className="col">
            <lable>Hobby:</lable>
            <br></br>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="terms"
                value="Sport"
                name="Sport"
                {...register("hobby", { required: true })}
              />
              <label>Sport</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="terms"
                value="Reading"
                name="Reading"
                {...register("hobby", { required: true })}
              />
              <label>Reading</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="terms"
                value="Traveling"
                name="Traveling"
                {...register("hobby", { required: true })}
              />
              <label>Traveling</label>
            </div>
          </div>
          {errors.hobby && (
            <span style={{ color: "red" }}>Please enter Your Hobby</span>
          )}
        </div>
        <button type="submit">{isEdit? "Update":"Submit"}</button>
        
      </form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>State</th>
            <th>Gender</th>
            <th>Hobby</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {formDataArray.map((value, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{value.firstName}</td>
              <td>{value.lastName}</td>
              <td>{value.email}</td>
              <td>{value.State}</td>
              <td>{value.gender}</td>
              <td>{value.hobby}</td>

              <td>
                <button
                  variant="dark"
                  onClick={
                    () => editData(i)
                  }
                >
                  Edit
                </button>{" "}
                <button
                  variant="danger"
                  onClick={() => {
                    deletData(i);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
