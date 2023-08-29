import React, { Component } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import LogoutIcon from "@mui/icons-material/Logout";
// import Component3 from './Component3'
// import Component4 from './Component4'
import { Button } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

export default class Component2 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  componentChange(v){
    this.setState({count:v})
    
  }
  render() {
    const {count} = this.state;
    return (
      
      <>
        <Grid>
          <Grid style={{borderBottom:'1px solid #bdbdbd'}}>
            <h2 style={{marginLeft:'20px'}}>Settings</h2>
          </Grid>
          <Grid container columns={12}>
            <Grid lg={2} xs={12}>
              <Grid style={{ borderRadius: "10px", boxShadow: "2px 2px 2px #bdbdbd,2px 2px 0px #bdbdbd,2px 2px 0px #bdbdbd" }}>
              <Link to="/">
                <Grid style={setting.secondComptContainer} onClick={()=>this.componentChange(0)}>
                  <Grid style={count === 0 ?setting.iconsOnClick : setting.icons}>A+</Grid>
                  <Grid style={count === 0 ? setting.textOnClick :setting.text}>Basic Setting</Grid>
                </Grid>
                </Link>
                
                <Link to="/component4">
                <Grid style={setting.secondComptContainer} onClick={()=>this.componentChange(1)}>
                  <Grid style={count === 1 ?setting.miidleIconOnClick : setting.miidleIcon}>$</Grid>
                  <Grid style={count === 1 ? setting.textOnClick :setting.text}>Bills And Plans</Grid>
                </Grid>
                </Link>
                <Link to="/">
                <Grid style={setting.secondComptContainerLast} onClick={()=>this.componentChange(2)}>
                  <Grid>
                    <LogoutIcon style={count === 2 ?setting.iconsOnClick : setting.icons} />
                  </Grid>
                  <Grid style={count === 2 ? setting.textOnClick : setting.text}>Logout</Grid>
                </Grid>
                </Link>
              </Grid>
            </Grid>
            <Grid lg={10} xs={12}> 
            <Grid><Outlet/></Grid>
            <Grid style={{display:'flex', justifyContent:'flex-end', marginRight:'20px', marginTop:'20px'}}><Button style={setting.button}>Save Change</Button></Grid>
            </Grid>
            
          </Grid>
        </Grid>
      </>
    );
  }
}

const setting = {
  icons: {
    fontWeight: "500",
    backgroundColor: "#e8eaf6",
    marginRight: "10px",
    textAlign: "center",
    padding: "15px",
    color: "#1a237e",
    borderRadius: "8px",
  },

  miidleIcon: {
    fontWeight: "500",
    backgroundColor: "#e8eaf6",
    marginRight: "10px",
    textAlign: "center",
    padding: "15px",
    color: "#1a237e",
    borderRadius: "8px",
    width: "52px",
  },

  text: {
    padding: "15px",
    paddingLeft: "0px",
    fontWeight: "500",
    color:'grey',
    width:'100%',
    marginLeft:'10px'
  },

  secondComptContainer: {
    display: "flex",
    borderBottom: "1px solid #bdbdbd",
    padding: "10px",
    paddingRight:'0px',
  },

  secondComptContainerLast: {
    display: "flex",
    padding: "9px",
    paddingRight:'0px',
  },


  iconsOnClick: {
    fontWeight: "500",
    backgroundColor: "#1a237e",
    marginRight: "10px",
    textAlign: "center",
    padding: "15px",
    color: "#e8eaf6",
    borderRadius: "8px",
  },

  miidleIconOnClick: {
    fontWeight: "500",
    backgroundColor: "#1a237e",
    marginRight: "10px",
    textAlign: "center",
    padding: "15px",
    color: "#e8eaf6",
    borderRadius: "8px",
    width: "52px",
  },

  textOnClick: {
    padding: "15px",
    paddingLeft: "0px",
    fontWeight: "500",
    color:'#000',
    width:'100%',
    borderRight:'7px solid #1a237e',
    marginLeft:'10px'
  },

  button:{
    backgroundColor:'#1a237e',
    color:'#fff',
    padding:'10px',
    width:'200px'
  }
};
