import React, { Component } from "react";
import "./App.css";
import { Radio, Space, Table } from "antd";
import Button from "react-bootstrap/Button";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      nameV: {
        fName: "",
        lName: "",
        sName: "",
        genderName: "",
        hobbyName: [],
      },
      nameData: [],
      edit: false,

      // isChecked: false,

      error: {
        efName: "",
        elName: "",
        esName: "",
      },
      key: "",
    };
  }
  nameHandler = (e) => {
    this.setState({
      nameV: {
        ...this.state.nameV,
        [e.target.name]: e.target.value,
      },
    });

    this.setState({
      error: {
        efName: "",
        elName: "",
        esName: "",
      },
    });
  };

  namegHandler = (e) => {
    this.setState({
      nameV: {
        ...this.state.nameV,
        genderName: e.target.value,
      },
    });
    // console.log("mmmmmmmmmm", this.state.nameV);
  };

  handleCheckboxChange = (e) => {
    console.log("$$$$$$$$$", e.target.checked, e.target.name);
    const { name, checked } = e.target;
    if (checked) {
      this.setState({
        nameV: {
          ...this.state.nameV,
          hobbyName: [...this.state.nameV.hobbyName, name],
        },
      });
    } else {
      const nameVObj = JSON.parse(JSON.stringify(this.state.nameV));
      const updatedVal = nameVObj?.hobbyName.filter((ele) => ele !== name);
      this.setState({
        nameV: {
          ...this.state.nameV,
          hobbyName: [...updatedVal],
        },
      });
    }
  };

  submitForm = (e) => {
    e.preventDefault();
    // if (this.state.nameV.fName === "") {
    //   this.setState({
    //     error: {
    //       efName: "please enter valid First Name",
    //     },
    //   });
    // } else if (this.state.nameV.lName === "") {
    //   this.setState({
    //     error: {
    //       elName: "please enter valid Last Name",
    //     },
    //   });
    // } else if (this.state.nameV.sName === "") {
    //   this.setState({
    //     error: {
    //       esName: "please enter valid Sar Name",
    //     },
    //   });
    // } else {
    // this.setState({
    //   nameData: [
    //     ...this.state.nameData,
    //     {...this.state.nameV,key:new Date().getTime()},
    //   ],
    // });
    this.setState((prevState) => ({
      nameData: [
        ...prevState.nameData,
        { ...this.state.nameV, key: new Date().getTime() },
      ],
    }));

    this.setState({
      nameV: {
        fName: "",
        lName: "",
        sName: "",
        hobbyName: [],
      },
    });

    // }
  };

  deletData = (key) => {
    // console.log(".........ffff..", key);
    const updatedData = this.state.nameData.filter((value) => {
      if (value.key !== key) {
        // console.log("...............>>>>>>>>>>>>>", key);
        return true;
      } else {
        return false;
      }
    });
    this.setState({
      nameData: updatedData,
    });
  };

  editData = (key) => {
    const selectData = this.state.nameData.find((value) => value?.key === key);
    if (selectData) {
      this.setState({
        nameV: {
          fName: selectData.fName || this.state.nameV.fName,
          lName: selectData.lName || this.state.nameV.lName,
          sName: selectData.sName || this.state.nameV.sName,
          genderName: selectData.genderName || this.state.nameV.genderName,
          key: selectData.key || this.state.nameV.key,
          hobbyName: selectData.hobbyName || this.state.nameV,
        },
      });
      this.setState({
        edit: true,
      });
    }
  };

  updateForm = (e) => {
    e.preventDefault();
    const updatedNameData = this.state.nameData.map((value) => {
      if (value.key === this.state.nameV.key) {
        return {
          fName: this.state.nameV.fName,
          lName: this.state.nameV.lName,
          sName: this.state.nameV.sName,
          genderName: this.state.nameV.genderName,
          hobbyName: this.state.nameV.hobbyName,
          key: value.key,
        };
      }
      return value;
    });
    this.setState({
      nameData: updatedNameData,
      nameV: {
        fName: "",
        lName: "",
        sName: "",
        hobbyName: [],
      },
      edit: false,
    });
  };

  columns = [
    {
      title: "FirstName",
      dataIndex: "fName",
    },
    {
      title: "LastName",
      dataIndex: "lName",
    },
    {
      title: "SurName",
      dataIndex: "sName",
    },
    {
      title: "Gender",
      dataIndex: "genderName",
    },
    {
      title: "Hobby",
      dataIndex: "hobbyName",
    },

    {
      title: "Action",

      render: (_, record, i) => (
        <Space size="middle">
          <Button
            variant="primary"
            onClick={() => {
              this.editData(record?.key);
              this.setState({
                key: record?.key,
                index: record?.key,
              });
            }}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              this.deletData(record?.key);
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  render() {
    console.log(this.state);
    return (
      <div className="container" role="dialog">
        <form>
          <div
            onChange={(e) => {
              this.nameHandler(e);
            }}
          >
            <h4>First Name :</h4>
            <input
              type="text"
              name="fName"
              value={this.state.nameV.fName}
              onChange={(e) => {
                this.nameHandler(e);
              }}
            ></input>
            {<p style={{ color: "red" }}>{this.state.error.efName}</p>}
            <h4>Last Name :</h4>
            <input
              type="text"
              name="lName"
              value={this.state.nameV.lName}
              onChange={(e) => {
                this.nameHandler(e);
              }}
            ></input>
            {<p style={{ color: "red" }}>{this.state.error.elName}</p>}
            <h4>Sur Name :</h4>
            <input
              type="text"
              name="sName"
              value={this.state.nameV.sName}
              onChange={(e) => {
                this.nameHandler(e);
              }}
            ></input>
            {<p style={{ color: "red" }}>{this.state.error.esName}</p>}
          </div>
          <br></br>
          <div
            onChange={(e) => {
              this.namegHandler(e);
            }}
          >
            <h4>Gender:</h4>

            <Radio.Group
              onChange={(e) => this.namegHandler(e)}
              value={this.state.nameV.genderName}
            >
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
            </Radio.Group>
          </div>
          <br></br>
          <div>
            <h4>Hobby :</h4>
            <label>
              <input
                type="checkbox"
                value="Sport "
                name="Sport"
                checked={
                  this.state.nameV?.hobbyName?.includes("Sport") ? true : false
                }
                onChange={(e) => this.handleCheckboxChange(e)}
              />
              Sport
            </label>
            <br></br>
            <label>
              <input
                type="checkbox"
                value="Reading "
                name="Reading"
                checked={
                  this.state.nameV?.hobbyName?.includes("Reading")
                    ? true
                    : false
                }
                onChange={(e) => this.handleCheckboxChange(e)}
              />
              Reading
            </label>
            <br></br>
            <label>
              <input
                type="checkbox"
                value="Traveling "
                name="Traveling"
                checked={
                  this.state.nameV?.hobbyName?.includes("Traveling")
                    ? true
                    : false
                }
                onChange={(e) => this.handleCheckboxChange(e)}
              />
              Traveling
            </label>
            <br></br>
            <label>
              <input
                type="checkbox"
                value="Cooking "
                name="Cooking"
                checked={
                  this.state.nameV?.hobbyName?.includes("Cooking")
                    ? true
                    : false
                }
                onChange={(e) => this.handleCheckboxChange(e)}
              />
              Cooking
            </label>
          </div>

          <br></br>
          <br></br>
          {this.state.edit === true ? (
            <button
              onClick={(e) => {
                this.updateForm(e);
              }}
            >
              Editform
            </button>
          ) : (
            <button
              onClick={(e) => {
                this.submitForm(e);
              }}
            >
              Submit
            </button>
          )}
        </form>
        <br></br>

        <div>
          <Table
            columns={this.columns}
            dataSource={[...this.state.nameData]}
            pagination={{
              defaultPageSize: 10,
              showSizeChanger: true,
              pageSizeOptions: ["3", "10", "20", "30"],
            }}
          />
        </div>
      </div>
    );
  }
}


