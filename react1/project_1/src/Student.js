import React, { Component } from "react";
import { Space, Table } from "antd";
import Button from "react-bootstrap/Button";

// export default class App extends Component {
//   constructor(value) {
//     super(value);
//     this.state = {
//       nameV: {
//         Fname: "",
//         Lname: "",
//       },
//       nameData: [],
//       edit: false,
//       index: "",
//     };
//   }

//   nameHandler = (e) => {
//     this.setState({
//       nameV: {
//         ...this.state.nameV,
//         [e.target.name]: e.target.value,
//       },
//     });
//   };

//   submitForm = (e) => {
//     e.preventDefault();
//     this.setState({
//       nameData: [...this.state.nameData, this.state.nameV],
//     });
//     this.setState({
//       nameV: {
//         Fname: "",
//         Lname: "",
//       },
//     });
//   };

//   deletData = (i) => {
//     // console.log("............", i);
//     this.state.nameData.splice(i, 1);
//     this.setState({
//       nameData: [...this.state.nameData],
//     });
//   };

//   editData = (i) => {
//     const selectrddata = this.state.nameData[i];
//     this.setState({
//       nameV: {
//         Fname: selectrddata.Fname,
//         Lname: selectrddata.Lname,
//       },
//     });
//     this.setState({
//       edit: true,
//     });
//     return this.setState({
//       nameData:[this.state.nameV]
//     })
//   };

//   updateForm = () => {
//     const formnamedata = this.state.nameData[this.state.index];
//     console.log("formnamedata", formnamedata);

//     this.setState({
//       nameV: {
//         Fname: this.state.nameV.Fname || formnamedata.Fname,
//         Lname: this.state.nameV.Lname || formnamedata.Lname,
//       },
//     });

//     this.setState({
//       nameData: [this.state.nameV],
//     });
//     // this.setState({
//     //   nameV: {
//     //     Fname: "",
//     //     Lname: "",
//     //   },
//     // });
//     return this.setState({
//       edit: false,
//     });
//   };

//   columns = [
//     {
//       title: "Fname",
//       dataIndex: "Fname",
//     },
//     {
//       title: "Lname",
//       dataIndex: "Lname",
//     },
//     {
//       title: "Lname",
//       dataIndex: "Lname",
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: (_, record, i) => (
//         <Space size="middle">
//           <Button
//             variant="primary"
//             onClick={() => {
//               this.editData(i);
//               this.setState({
//                 index: i,
//               });
//             }}
//           >
//             Edit
//           </Button>
//           <Button
//             variant="danger"
//             onClick={() => {
//               this.deletData(i);
//             }}
//           >
//             Delete
//           </Button>
//         </Space>
//       ),
//     },
//   ];

//   render() {
//     return (
//       <div className="container">
//         <form>
//           <h1>First Name</h1>
//           <input
//             type="text"
//             name="Fname"
//             value={this.state.nameV.Fname}
//             onChange={(e) => {
//               this.nameHandler(e);
//             }}
//           ></input>
//           <h1>Last Name</h1>
//           <input
//             type="text"
//             name="Lname"
//             value={this.state.nameV.Lname}
//             onChange={(e) => {
//               this.nameHandler(e);
//             }}
//           ></input>
//           <br></br>
//           <br></br>
//           {this.state.edit === true ? (
//             <button
//               onClick={
//                 this.updateForm
// }
//             >
//               Editform
//             </button>
//           ) : (
//             <button
//               onClick={(e) => {
//                 this.submitForm(e);
//               }}
//             >
//               Submit
//             </button>
//           )}
//         </form>
//         <br></br>

//         <div>
//           <Table columns={this.columns} dataSource={[...this.state.nameData]} />
//         </div>
//       </div>
//     );
//   }
// }
