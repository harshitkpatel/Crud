import React, { Component } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export default class Footer extends Component {
  render() {
    return (
      <>
        <Grid container lg={12} style={footer.mainContainer}>
          <Grid lg={6} xs={12} sm={6}>
            <Grid container lg={12} direction="row" alignItems="center">
              <Grid lg={4} xs={12} style={{ padding: "8px" }}>
                <span style={footer.footerText}>
                  <li style={{ listStyleType: "none" }}>
                    &copy;2024 PetaHotel
                  </li>
                </span>
              </Grid>
              <Grid lg={4} xs={12} style={footer.textContainer}>
                <span style={footer.footerText}>
                  <li>Privcy policy</li>
                </span>
              </Grid>
              <Grid lg={4} xs={12} style={footer.textContainer}>
                <span style={footer.footerText}>
                  <li>Terms & conditions</li>
                </span>
              </Grid>
            </Grid>
          </Grid>
          <Grid lg={6} xs={6} sm={6}>
            <Grid container lg={12} style={footer.iconContainer}>
              <Grid lg={4} xs={12} style={footer.iconStyle}>
                <FacebookIcon />
              </Grid>
              <Grid lg={4} xs={12} style={footer.iconStyle}>
                <TwitterIcon />
              </Grid>
              <Grid lg={4} xs={12} style={footer.iconStyle}>
                {" "}
                <InstagramIcon />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

const footer = {
  mainContainer: {
    padding: "20px",
  },
  footerText: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#757575",
  },

  textContainer:{
    padding: "8px"
  },

  iconContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },

  iconStyle:{
    padding: "8px",
    fontSize:'14px',
    color: "#757575",
  }
};
