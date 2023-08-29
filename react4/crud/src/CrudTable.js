import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteData,
  getData,deleteAllSelectedData
} from "./store/slice/createSlice";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

export default function CrudTable() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedvalue, setselectedValue] = useState();
  const [selectedindex, setselectedIndex] = useState();
  const [checkedDataIndex, setCheckedDataIndex] = useState([]);
  const [checkedDataVal, setCheckedDataVal] = useState([]);

  const [showDelete, setShowDelete] = useState(false);

  const handleDeleteClose = () => setShowDelete(false);
  const handleDeleteShow = () => setShowDelete(true);
  const state = useSelector((state) => state.submit.formDataArray);
  const dispatch = useDispatch();
  // const [newData , setNewData ] = useState(state);

  const deleteSelectData = (e , value ,index) => {
    if (e.target.checked === true && e.target.name === "allChecked") {
      setCheckedDataIndex([...checkedDataIndex, ...state.map((v) => v.uniqeKey)]);
      // setCheckedDataIndex([...checkedDataVal, ...state.map((v) => v)])
      setCheckedDataVal([...checkedDataVal, ...state.map((v) => v.uniqeKey)])
    } else if (e.target.checked === false && e.target.name === "allChecked") {
      setCheckedDataIndex([]);
      setCheckedDataVal([])
    } else
     if (e.target.checked) {
      setCheckedDataIndex([...checkedDataIndex, value.uniqeKey]);
      setCheckedDataVal([...checkedDataVal, value])
    } else {
      setCheckedDataIndex([...checkedDataIndex.filter((v) => v !== value.uniqeKey)]);
      setCheckedDataVal([...checkedDataVal.filter((v)=> v !== value) ])
    }
  };

  // const deleteAllSelectedData = () => {
  //   const abc = newData.filter((v) => v.uniqeKey )
  //   console.log(abc);
  // }

  return (
    <div>
      {console.log('value.uniqeKey >> ', checkedDataIndex)}
      {console.log('value.uniqeKey >> ', checkedDataVal)}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={(e) => deleteSelectData(e)}
                name="allChecked"
              />
            </th>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Sur name</th>
            <th>Gender</th>
            <th>City</th>
            <th>Hobby</th>
            <th>Birthday</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.map((value, index) => (
            <tr>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => deleteSelectData(e , value ,index)}
                  checked={checkedDataIndex.includes(value.uniqeKey)}
                />
              </td>
              <td>{index + 1}</td>
              <td>{value.fName}</td>
              <td>{value.lName}</td>
              <td>{value.sName}</td>
              <td>{value.gender}</td>
              <td>{value.city}</td>
              <td>{value.hobby}</td>
              <td>{value.birthday}</td>

              <td>
                <Button
                  variant="dark"
                  onClick={() => {
                    handleShow();
                    setselectedValue(value);
                  }}
                >
                  Edit
                </Button>

                <Button
                  variant="danger"
                  onClick={() => {
                    handleDeleteShow();
                    setselectedIndex(index);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button
        variant="danger"
        onClick={() => {
          dispatch(deleteAllSelectedData(checkedDataIndex));
        }}
      >
        Delete Selected Data
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>You want edit your data!</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button
            variant="primary"
            onClick={() => {
              dispatch(getData(selectedvalue));
              navigate("/");
            }}
          >
            Edit
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDelete} onHide={handleDeleteClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>You want Delete your data!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteClose}>
            Close
          </Button>

          <Button
            variant="primary"
            onClick={() => {
              dispatch(deleteData(selectedindex));
              handleDeleteClose();
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
