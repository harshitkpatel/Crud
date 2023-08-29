import React, { Component } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DiamondIcon from "@mui/icons-material/Diamond";

export default class Component4 extends Component {
  render() {
    return (
      <>
        <Grid style={changSubScrin.mainContainer}>
          <Grid style={{minHeight:'81vh'}}>
          <Grid style={changSubScrin.firstComt}>
            <Grid>
              <p>
                Billing -&gt;{" "}
                <span style={{ color: "#2c387e" }}>Change Payment Method</span>
              </p>
            </Grid>
          </Grid>
          <Grid style={changSubScrin.secondCompt}>
            <Grid container columns={12}>
              <Grid lg={4} xs={12} style={{padding:'5px'}}>
                <Card style={changSubScrin.card}>
                  <CardContent style={changSubScrin.cardCompt}>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <DiamondIcon style={changSubScrin.cardIcon}/>
                    </Typography>
                    <Typography variant="h5" component="div"></Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <span style={{fontSize:'20px', fontWeight:'600', color:'#000'}}>Advance</span>
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly,well meaning and kindly.
                      well meaning and kindly,well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}

                      <h3 style={{textAlign:'right'}}>$42/month</h3>
                    </Typography>
                  </CardContent>
                  <CardActions style={{display:'flex', justifyContent:'center'}}>
                    <Button style={changSubScrin.button}>Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid lg={4} xs={12} style={{padding:'5px'}}>
                <Card style={changSubScrin.middleCard}>
                  <CardContent style={changSubScrin.cardCompt}>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <DiamondIcon style={changSubScrin.cardIcon} />
                    </Typography>
                    <Typography variant="h5" component="div"></Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <span style={{fontSize:'20px', fontWeight:'600', color:'#000'}}>Your Subscription</span>
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly,well meaning and kindly.
                      well meaning and kindly,well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                      <h3 style={{textAlign:'right'}}>$42/month</h3>
                    </Typography>
                  </CardContent>
                  <CardActions style={{display:'flex', justifyContent:'center'}}>
                    <Button style={changSubScrin.middleButton}>Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid lg={4} xs={12} style={{padding:'5px'}}>
                <Card style={changSubScrin.card}>
                  <CardContent style={changSubScrin.cardCompt}>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <DiamondIcon style={changSubScrin.cardIcon} />
                    </Typography>
                    <Typography variant="h5" component="div"></Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <span style={{fontSize:'20px', fontWeight:'600', color:'#000'}}>Advance</span>
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly,well meaning and kindly.
                      well meaning and kindly,well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                      <h3 style={{textAlign:'right'}}>$42/month</h3>
                    </Typography>
                  </CardContent>
                  <CardActions style={{display:'flex', justifyContent:'center'}}>
                    <Button style={changSubScrin.button}>Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

const changSubScrin = {

    mainContainer:{
        margin:'10px',
        backgroundColor:'#fff',
        border: "1px solid #f5f5f5",
        borderRadius:"25px"
    },

    card: {
        width:'90%',
        margin:'20px',
        backgroundColor:'#fafafa'
    },

    middleCard:{
        width:'90%',
        margin:'20px',
        backgroundColor:''
    },

    cardIcon: {
        fontSize:'45px',
        color:'#1a237e'
    },

    cardCompt :{
        padding:'25px',
        paddingBottom:'0px'
    },
    
    button:{
        backgroundColor:'#1a237e',
        color:'#fff',
        width:'90%',
        height:'40px'
    },

    middleButton:{
        backgroundColor:'#fff',
        fontWeight:'600',
        width:'90%',
        height:'40px',
        border:'1px solid #1a237e',
        color:'#1a237e'
    },

    firstComt:{
        borderBottom: "1px solid #bdbdbd",
        padding:'20px',
        paddingTop:'10px',
        paddingBottom:'10px',
        fontWeight:'500',
        color:'#616161'
    },

    secondCompt:{
        marginTop:'10px',
        borderBottom: "1px solid #bdbdbd",
        paddingBottom:'10px',
    }
}
