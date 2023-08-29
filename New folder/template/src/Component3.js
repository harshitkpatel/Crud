import React, { Component } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";

export default class Component3 extends Component {
  render() {
    return (
      <>
        <Grid style={editProfile.mainComponent}>
          <Grid>
            <Grid
              style={{ padding: "10px", borderBottom: "1px solid #bdbdbd" }}
            >
              <Grid style={editProfile.forstComponent}>
                <p style={{ fontSize: "17px", fontWeight: "500" }}>
                  Edit Profile
                </p>
                <Avatar style={editProfile.forstComponentAvtar}>SC</Avatar>
                <p style={{ fontSize: "14px", fontWeight: "500" }}>
                  5mb size or less PNG/JPEG/GIF File Suport Only
                </p>
              </Grid>
              <Grid container columns={12} style={editProfile.secondComponent}>
                <Grid lg={6} xs={12}>
                  <label style={editProfile.secondComponentLableStyle}>
                    First Name
                  </label>
                  <br />
                  <input
                    name="cardholderName"
                    type="text"
                    style={editProfile.secondComponentInputStyle}
                  />
                </Grid>
                <Grid lg={6} xs={12}>
                  <label style={editProfile.secondComponentLableStyle}>
                    Last Name
                  </label>
                  <br />
                  <input
                    name="cardholderName"
                    type="text"
                    style={editProfile.secondComponentInputStyle}
                  />
                </Grid>
              </Grid>
              <Grid container columns={12} style={editProfile.thirdComponent}>
                <Grid lg={6} xs={12}>
                  <label style={editProfile.secondComponentLableStyle}>
                    Email Address
                  </label>
                  <br />
                  <input
                    name="cardholderName"
                    type="text"
                    style={editProfile.secondComponentEmailInputStyle}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              style={{ padding: "10px", borderBottom: "1px solid #bdbdbd" }}
            >
              <Grid container columns={12} style={editProfile.fourthComponent}>
                <Grid lg={12} xs={12}>
                  <p style={{ fontSize: "16px", fontWeight: "500" }}>
                    Other Details
                  </p>
                </Grid>
                <Grid lg={6} xs={12}>
                  <label style={editProfile.secondComponentLableStyle}>
                    Company Name
                  </label>
                  <br />
                  <input
                    name="cardholderName"
                    type="text"
                    style={editProfile.secondComponentInputStyle}
                  />
                </Grid>
                <Grid lg={6} xs={12}>
                  <label style={editProfile.secondComponentLableStyle}>
                    District/Local Authority
                  </label>
                  <br />
                  <select
                    name="cars"
                    id="cars"
                    style={editProfile.secondComponentInputStyle}
                  >
                    <option value=""></option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </Grid>
              </Grid>
            </Grid>
            <Grid style={{ padding: "10px"}}>
              <Grid style={editProfile.fifthComponent}>
                <Grid style={{ display: "flex" }}>
                  <p style={{ fontSize: "16px", fontWeight: "500" }}>
                    Additional User Fields
                  </p>
                  <Tooltip
                    title="Add"
                    placement="top"
                    arrow
                    style={editProfile.fifthComponentTooltip}
                  >
                    <Button>Edit</Button>
                  </Tooltip>
                </Grid>
                <Grid style={editProfile.fifthComponentCheck}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Distrtict and Local Authority"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Industry Sector"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Company Name"
                  />
                </Grid>
                <Grid>
                  <Link href="#" style={{ marginTop: "10px" }}>
                    <p style={{ fontWeight: "490" }}>Tearms And Condition</p>
                  </Link>
                  <Link href="#">
                    <p style={{ fontWeight: "490" }}>Privacy Policy</p>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

const editProfile = {
  //   mainContainerStyle: {
  //     border: "1px solid #e0e0e0",
  //     margin: "10px",
  //     borderRadius: "5px",
  //     fontSize: "16px",
  //   },

  mainComponent: {
    border: "1px solid #e0e0e0",
    marginTop:'8px',
    marginLeft: "20px",
    marginRight: "20px",
    borderRadius: "15px",
  },

  forstComponent: {
    marginLeft: "5px",
  },
  forstComponentAvtar: {
    width: "80px",
    height: "80px",
    backgroundColor: "#ede7f6",
    fontSize: "40px",
    color: "#b39ddb",
  },

  secondComponent: {
    marginTop: "20px",
  },

  secondComponentLableStyle: {
    fontSize: "15px",
    fontWeight: "600",
  },

  secondComponentEmailInputStyle: {
    width: "97%",
    height: "35px",
    margin: "5px",
    border: "1px solid #000",
    borderRadius: "10px",
    fontSize: "15px",
    backgroundColor: "#f5f5f5",
  },

  secondComponentInputStyle: {
    width: "97%",
    height: "35px",
    margin: "5px",
    border: "1px solid #000",
    borderRadius: "10px",
    fontSize: "15px",
  },

  thirdComponent: {
    // marginTop: "5px",
    paddingBottom: "5px",
  },

  fourthComponent: {
    // marginTop: "0px",
    // marginBottom: "7px",
  },

  fifthComponent: {
    // marginTop: "3px",
    // paddingBottom: "3px",
  },

  fifthComponentTooltip: {
    height: "30px",
    backgroundColor: "#fff",
    margin: "10px",
    border: "1px solid #536dfe",
    borderRadius: "10px",
  },

  fifthComponentCheck: {
    // margin: "5px",
  },
};
