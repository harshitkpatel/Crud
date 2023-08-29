import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { connect } from "react-redux";
import {
  deleteData,
  editData,
  addData,
  getData,
} from "./store/fetures/postSlices";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => ({
  data: state,
});

export class Tablecrud extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      newData: [],
      index: Number(""),
      isEdit: false,
    };
  }

  openModal = () => {
    this.setState({ isOpen: true });
    this.setState({});
  };
  closeModal = () => this.setState({ isOpen: false });

  nameHandel(e) {
    this.setState({
      getData: {
        ...this.state.getData,
        [e.target.name]: e.target.value,
      },
    });
  }
  namegHandler(e) {
    this.setState({
      getData: {
        ...this.state.getData,
        genderName: e.target.value,
      },
    });
  }
  nameselectHandler(e) {
    this.setState({
      getData: {
        ...this.state.getData,
        city: e.target.value,
      },
    });
  }
  namecheckHandler(e) {
    const { name, checked } = e.target;
    if (checked) {
      this.setState({
        getData: {
          ...this.state.getData,
          hobbyName: [...this.state.getData.hobbyName, name],
        },
      });
    } else {
      const getNewdata = JSON.parse(JSON.stringify(this.state.getData));
      const newHobby = getNewdata?.hobbyName.filter((hel) => hel !== name);
      this.setState({
        getData: {
          ...this.state.getData,
          hobbyName: [...newHobby],
        },
      });
    }
  }
  render() {
    return (
      <div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Surname</th>
                <th>Gender</th>
                <th>City</th>
                <th>Hobby</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.submit.nameItem.map((value, key) => (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{value.getData.fName}</td>
                  <td>{value.getData.lName}</td>
                  <td>{value.getData.sName}</td>
                  <td>{value.getData.genderName}</td>
                  <td>{value.getData.city}</td>
                  <td>{value.getData.hobbyName}</td>
                  <td>{value.getData.toDayDate}</td>
                  <td>
                    <Link to="/">
                      <Button
                        variant="secondary"
                        onClick={() => {
                          this.props.getData(value);

                          console.log(value.getData);
                        }}
                      >
                        Edit
                      </Button>
                    </Link>

                    <Button
                      variant="primary"
                      onClick={() => this.props.deleteData(key)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { editData, deleteData, addData, getData };

export default connect(mapStateToProps, mapDispatchToProps)(Tablecrud);
