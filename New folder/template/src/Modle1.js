import React, { Component } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Unstable_Grid2";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Checkbox from "@mui/material/Checkbox";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

class Modle1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      dropOpen: false,
      listData: ["name1", "name2", "name3", "name4", "name5", "name6", "name7"],
    };
  }

  dropHandleOpen() {
    this.setState({ dropOpen: true });
  }

  dropHandleClose() {
    this.setState({ dropOpen: false });
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open, dropOpen } = this.state;

    return (
      <>
        <Button onClick={this.handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={this.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Grid sx={style.modle}>
            <Grid>
              <Grid style={{display:'flex', justifyContent:'center', padding:'0px'}}>
                <Typography variant="h5">Default List</Typography>
              </Grid>
              <Grid>
                <Grid style={{}}>
                  <Button
                    id="composition-button"
                    aria-expanded={dropOpen ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={this.handleToggle}
                    style={{
                      width: "100%",
                      backgroundColor: "#e8eaf6",
                      height: "6vh",
                      marginTop: "3%",
                      display:'flex',
                      justifyContent: "space-between",
                      color:'#000',
                      border:'1px solid #000'

                    }}
                  >
                    <p>
                      Direct/Local Authority
                    </p>
                    <ArrowDropDownIcon style={{ marginLeft: "20px" }} />
                  </Button>
                </Grid>
                <Grid>
                  {this.state.listData.map((value) => (
                    <Grid style={style.listStyle}>
                      <Grid>{value}</Grid>
                      <Grid style={{ display: "flex", alignItems: "center" }}>
                        <Checkbox style={{ margin: "0px", padding: "0px",color:'#blue' }} />{" "}
                        <CreateIcon style={{ marginLeft: "9px" }} />{" "}
                        <DeleteIcon style={{ marginLeft: "9px",color:'red' }} />
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
                <Button style={{border:'1px solid #3f51b5', padding:'5px', borderRadius:'5px', marginTop:'2%', color:'#283593'}}>Add Now</Button>
              </Grid>
              <Grid style={{textAlign:'center'}}>
                <Button style={{backgroundColor:'#283593', color:'#fff', padding:'10px', width:'30%',marginTop:'3%'}}>Save</Button><br/>
                <Button style={{border:'1px solid #3f51b5', color:'#283593', padding:'10px', width:'30%', marginTop:'1%'}}>Cancle</Button>
              </Grid>
            </Grid>
          </Grid>
        </Modal>
      </>
    );
  }
}

export default Modle1;

const style = {
  modle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    bgcolor: "background.paper",
   
    boxShadow: 24,
    p: 4,
    height: "90vh",
    padding: "20px !important",
    border:'1px solid #f5f5f5',
    borderRadius:"25px",
    
  },

  listStyle: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    // marginTop: "2%",    
    height: "6vh",
    padding: "10px",
    border:'1px solid #f5f5f5'
  },
};
