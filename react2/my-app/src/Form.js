import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { addData, getData, editData } from "./store/fetures/postSlices";
import { connect } from "react-redux";
import { Radio } from "antd";

const mapStateToProps = (state) => ({
  selectedPrevData: state.submit.oldNameItem,
  allState: state,
});

export class Formcrud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getData: {
        fName: "",
        lName: "",
        sName: "",
        genderName: "",
        city: "",
        hobbyName: [],
        toDayDate: "",
      },
      Index: "",
    };
  }

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

  dateHandler(e) {
    this.setState({
      getData: {
        ...this.state.getData,
        toDayDate: e.target.value,
      },
    });
  }

  onClearform() {
    this.setState({
      getData: {
        fName: "",
        lName: "",
        sName: "",
        genderName: "",
        city: "",
        hobbyName: [],
        toDayDate: "",
      },
    });
  }

  componentDidMount() {
    this.setState({
      getData: this.props.selectedPrevData,
    });
  }
  render() {
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
                value={this.state.getData.fName}
                onChange={(e) => this.nameHandel(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lName"
                value={this.state.getData.lName}
                onChange={(e) => this.nameHandel(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Sur Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Sur Name"
                name="sName"
                value={this.state.getData.sName}
                onChange={(e) => this.nameHandel(e)}
              />
            </Form.Group>
            <lable>Gender</lable>
            <br></br>
            <Radio.Group
              onChange={(e) => this.namegHandler(e)}
              value={this.state.getData.genderName}
            >
              <Radio
                value="Male"
                checked={this.state.getData.genderName === "Male"}
              >
                Male
              </Radio>
              <br></br>
              <Radio
                value="Female"
                checked={this.state.getData.genderName === "Female"}
              >
                Female
              </Radio>
              <br></br>
            </Radio.Group>
            <br></br>
            <br></br>
            <lable>City</lable>
            <Form.Select
              onChange={(e) => this.nameselectHandler(e)}
              value={this.state.getData.city}
            >
              <option>Open this select menu</option>
              <option value="Surat">Surat</option>
              <option value="Ahemdabad">Ahemdabad</option>
              <option value="Rajkot">Rajkot</option>
            </Form.Select>
            <br></br>
            <br></br>
            <div className="mb-3">
              <Form.Label>Hobby</Form.Label>
              <br></br>
              <Form.Check
                inline
                label="Sport"
                name="Sport"
                value="Sport"
                checked={this.state.getData?.hobbyName?.includes("Sport")}
                onChange={(e) => this.namecheckHandler(e)}
              />
              <Form.Check
                inline
                label="Traveling"
                name="Traveling"
                value="Traveling"
                checked={this.state.getData?.hobbyName?.includes("Traveling")}
                onChange={(e) => this.namecheckHandler(e)}
              />
              <Form.Check
                inline
                label="Cooking"
                name="Cooking"
                value="Cooking"
                checked={this.state.getData?.hobbyName?.includes("Cooking")}
                onChange={(e) => this.namecheckHandler(e)}
              />
            </div>
            <br></br>
            <br></br>
            <Form.Group>
              <Form.Label>Select Date:</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                placeholder="Date of Birth"
                onChange={(e) => this.dateHandler(e)}
                value={this.state.getData.toDayDate}
              />
            </Form.Group>
            <br></br>
            <br></br>
            {this.props.allState.submit.isEdit === false ? (
              <Button
                variant="primary"
                onClick={(e) => {
                  this.props.addData(this.state);

                  this.onClearform();
                }}
              >
                Submit
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={() => {
                  this.props.editData(this.state);
                  this.onClearform();
                }}
              >
                update
              </Button>
            )}
          </Form>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = { addData, getData, editData };

export default connect(mapStateToProps, mapDispatchToProps)(Formcrud);
