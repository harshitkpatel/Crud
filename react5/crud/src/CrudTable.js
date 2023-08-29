import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteData, getData } from "./store/slice/createSlice";
import { useNavigate } from "react-router-dom";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
// import Modal from 'react-bootstrap/Modal';

export default function CrudTable() {
  
  const navigate = useNavigate();
 
  const handlePdf = () => {
    const input = document.getElementById('page');

    html2canvas(input, {logging: true, letterRendering: 1, useCORS: true})
    .then(canvas => {
      const imageWidth = 208;
      const imageHeight = canvas.height * imageWidth / canvas.width;
      const imageData = canvas.toDataURL('img/png');
      const pdf = new jsPDF('p','mm','a4')
      pdf.addImage(imageData,'png',0,0,imageWidth,imageHeight)
      pdf.save("table.pdf")
    })

};

  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  //   const [selectedvalue,setselectedValue]=useState();
  //   const [selectedindex,setselectedIndex]=useState();

  //   const [showDelete, setShowDelete] = useState(false);

  //   const handleDeleteClose = () => setShowDelete(false);
  //   const handleDeleteShow = () => setShowDelete(true);
  const state = useSelector((state) => state.submit.formDataArray);
  const dispatch = useDispatch();
  return (
    <div>
        <div id="page">
      <Table striped bordered hover>
        
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>City</th>
            <th>State</th>
            <th>Hobby</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.map((value, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{value.first_name}</td>
              <td>{value.last_name}</td>
              <td>{value.gender}</td>
              <td>{value.email}</td>
              <td>{value.phone_number}</td>
              <td>{value.city}</td>
              <td>{value.state}</td>
              <td>{value.hobby}</td>

              <td>
                <Button
                  variant="dark"
                  onClick={() => {
                    dispatch(getData(value));
                    navigate("/");
                  }}
                >
                  Edit
                </Button>{" "}

                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(deleteData(index));
                  }}
                >
                  Delete
                </Button> {" "}
                
              </td>
            </tr>
          ))}
          
        </tbody>
        
      </Table>
      </div>
      <Button variant="danger" onClick={() => {handlePdf()}} style={{}}>
        Downlode PDF
      </Button>
     
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>You want edit your data!</Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
          <Button variant="primary" onClick={()=>{ dispatch(getData(selectedvalue)); navigate("/")}}>
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
          
          <Button variant="primary" onClick={()=>{dispatch(deleteData(selectedindex)); handleDeleteClose()}}>
            Delete
          </Button>
          
        </Modal.Footer>
      </Modal> */}
    </div>
  );
}
