import React, { Component } from "react";
import Grid from "@mui/material/Grid"; // Grid version 1
import ReactFlagsSelect from "react-flags-select";

export default class Component1 extends Component {
  constructor() {
    super();
    this.state = {
      select: "IN",
    };
  }

  onSelect = (code) =>
    this.setState({
      select: code,
    });
  render() {
    return (
      <>
        <Grid>
          <Grid container lg={12}>
            <Grid lg={6} xs={12}>
              <Grid style={{display:'flex'}}>
                <Grid>
                  <p>
                    BON<span>STAN</span>
                  </p>
                </Grid>
                <Grid>
                  <ReactFlagsSelect
                    selected={this.state.select}
                    onSelect={this.onSelect}
                    countries={["fi", "GB", "IE", "IT", "NL", "SE", "IN","FI","CN","JP","KO"]}
                  />
                  <br />
                </Grid>
              </Grid>
            </Grid>
            <Grid lg={6} xs={12}></Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}
