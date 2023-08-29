import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class Form extends Component {
  render() {
    return (
      <>
        <Grid>
          <Grid style={form.firstCompt}>
            <Grid style={{ display: "flex" }}>
              <Grid>
                <Avatar>A</Avatar>
              </Grid>
              <Grid>
                <span>Good Morning</span><br></br> <span>Alron Renould</span>
              </Grid>
            </Grid>
          </Grid>
          <Grid style={{width: "901px"}}>
            <Grid style={form.secondCompt}>
              <h2>Add Pet Information</h2>
            </Grid>
            <Grid container lg={12}>
              <Grid lg={6} xs={12}>
                <Grid>
                  <AddCircleOutlineIcon /> <span>Add Pet</span>
                </Grid>
              </Grid>
              <Grid lg={6} xs={12}>
                <Grid>
                  <RadioGroup>
                    <Grid style={{ display: "flex" }}>
                      <FormControlLabel
                        value="Dog"
                        control={<Radio name="pet" style={{ color: "grey" }} />}
                        label="Dog"
                        type="radio"
                      />
                      <FormControlLabel
                        value="Cat"
                        control={<Radio name="pet" />}
                        label="Cat"
                        type="radio"
                      />
                    </Grid>
                  </RadioGroup>
                </Grid>
                <Grid>
                  <label>Pet Name*</label>
                  <br />
                  <input type="text" placeholder="Enter your pet name"></input>
                </Grid>
                <Grid>
                  <label>Breed*</label>
                  <br />
                  <input type="text" placeholder="Enter your pet breed"></input>
                </Grid>
                <Grid container lg={12}>
                  <Grid lg={6} xs={12}>
                    <label>Sex*</label>
                    <br />
                    <select name="sex" id="cars" placeholder="sex">
                      <option>sex</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </Grid>
                  <Grid lg={6} xs={12}>
                    <label>Date of Birth</label>
                    <br />
                    <input
                      type="text"
                      placeholder="  DD /  MM* / YYYY*"
                    ></input>
                  </Grid>
                </Grid>
                <Grid container lg={12}>
                  <Grid lg={6} xs={12}>
                    <label>Color</label>
                    <br />
                    <input
                      type="text"
                      placeholder="Enter your pet Color"
                    ></input>
                  </Grid>
                  <Grid lg={6} xs={12}>
                    <label>Weight</label>
                    <br />
                    <input
                      type="text"
                      placeholder="Enter your pet Weight"
                    ></input>
                  </Grid>
                </Grid>
                <Grid>
                  <label for="w3review">Spayed/Neutered</label>
                  <br></br>
                  <textarea id="w3review" name="w3review"></textarea>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

const form = {
  firstCompt: {
    backgroundColor: "grey",
    width: "901px",
    height: "91px",
    padding: "20px 45px 0px 40px",
  },
  secondCompt:{
    padding: "20px, 40px, 20px, 40px",
    borderBottom:'1px solid gray',
  },
  
};
