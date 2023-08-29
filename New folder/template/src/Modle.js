import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Checkbox from "@mui/material/Checkbox";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

export default class Modle extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      listData: ["name1", "name2", "name3", "name4", "name5", "name6", "name7"],
    };
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <>
        <React.Fragment>
          <Button onClick={() => this.handleOpen()}>Open Child Modal</Button>
          <Modal
            open={this.state.open}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            <Grid sx={{ ...this.style }}>
              <Grid>
                <h3>Details</h3>
              </Grid>
              <Grid style={{margin:'10px'}}>
                <Grid
                  style={{
                    border: "0.5px solid #000",
                    borderTop: "0.5px solid transparent",
                    width: "100%",
                    
                  }}
                >
                  <Grid style={{ ...this.firstListStyle }}>
                    <Grid>hiii</Grid>
                    <Grid>
                      <ArrowDropDownIcon />
                    </Grid>
                  </Grid>
                  <Grid>
                    {this.state.listData.map((value) => (
                      <Grid style={{ ...this.listStyle }}>
                        <Grid>{value}</Grid>
                        <Grid style={{ display: "flex", alignItems: "center" }}>
                          <Checkbox style={{ margin: "0px", padding: "0px" }} />{" "}
                          <CreateIcon style={{ marginLeft: "9px" }} />{" "}
                          <DeleteIcon style={{ marginLeft: "9px" }} />
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid style={{textAlign:'left'}}>
                  <Button
                    style={{
                      border: "0.5px solid Gray",
                      marginTop: "10px",
                    }}
                  >
                    Change
                  </Button>
                </Grid>
                <Grid style={{ ...this.buttonGridStyle }}>
                  <Button
                    onClick={() => this.handleClose()}
                    variant="contained"
                    style={{ width: "40%", marginBottom: "10px" }}
                  >
                    Save
                  </Button>
                  <Button
                    onClick={() => this.handleClose()}
                    style={{ width: "30%" }}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Modal>
        </React.Fragment>
      </>
    );
  }

  style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%", // Adjusted for responsiveness
    height: "90%",
    maxWidth: "500px",
    maxHeight: "600px", // Set maximum width for smaller screens
    bgcolor: "background.paper",
    borderRadius: "20px",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    textAlign: "center",
  };

  listStyle = {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    border: "0.5px solid Gray",
    fontWeight: "",
    padding: "10px",
  };

  buttonGridStyle = {
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
    flexFlow: "column",
    alignItems: "center",
  };

  firstListStyle = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "",
    padding: "10px",
  };
}
