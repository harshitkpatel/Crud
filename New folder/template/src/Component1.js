import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import ErrorOutlineTwoToneIcon from "@mui/icons-material/ErrorOutlineTwoTone";

export default class Component1 extends Component {
  constructor() {
    super();
    this.state = {
      cardData: {
        cardholderName: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
      },
      open: false,
      vertical: "bottom",
      horizontal: "center",
      alertText: [],
      cardholderNameError: false,
      cardNumberError: false,
      expiryDateError: false,
      cvv: false,
    };
  }
  creditCardDetaisHandler(e) {
    this.setState({
      cardData: {
        ...this.state.cardData,
        [e.target.name]: e.target.value,
      },
    });
  }

  validationData() {
    const { cardholderName, cardNumber, expiryDate, cvv } = this.state.cardData;

    switch (true) {
      case cardholderName === "" &&
        cardNumber === "" &&
        expiryDate === "" &&
        cvv === "":
        this.setState({
          alertText: [
            ...this.state.alertText,
            "Please enter cardholder name",
            "Credit card number is required.",
            "Expiry date is required.",
            "CVV is required.",
          ],
          open: true,
        });
        break;
      case cardholderName !== "" &&
        cardNumber === "" &&
        expiryDate === "" &&
        cvv === "":
        this.setState({
          alertText: [
            ...this.state.alertText,
            "Credit card number is required.",
            "Expiry date is required.",
            "CVV is required.",
          ],
          open: true,
        });
        break;
      case cardholderName === "" &&
        cardNumber !== "" &&
        expiryDate === "" &&
        cvv === "":
        this.setState({
          alertText: [
            ...this.state.alertText,
            "Please enter cardholder name",
            "Expiry date is required.",
            "CVV is required.",
          ],
          open: true,
        });
        break;

      case cardholderName === "" &&
        cardNumber === "" &&
        expiryDate !== "" &&
        cvv === "":
        this.setState({
          alertText: [
            ...this.state.alertText,
            "Please enter cardholder name",
            "Credit card number is required.",
            "CVV is required.",
          ],
          open: true,
        });
        break;

      case cardholderName === "" &&
        cardNumber === "" &&
        expiryDate === "" &&
        cvv !== "":
        this.setState({
          alertText: [
            ...this.state.alertText,
            "Please enter cardholder name",
            "Credit card number is required.",
            "Expiry date is required.",
          ],
          open: true,
        });
        break;

      case cardholderName !== "" &&
        cardNumber !== "" &&
        expiryDate === "" &&
        cvv === "":
        this.setState({
          alertText: [
            ...this.state.alertText,
            "Expiry date is required.",
            "CVV is required.",
          ],
          open: true,
        });
        break;

      case cardholderName === "" &&
        cardNumber === "" &&
        expiryDate !== "" &&
        cvv !== "":
        this.setState({
          alertText: [
            ...this.state.alertText,
            "Please enter cardholder name",
            "Credit card number is required.",
          ],
          open: true,
        });
        break;

      case cardholderName !== "" &&
        cardNumber === "" &&
        expiryDate === "" &&
        cvv !== "":
        this.setState({
          alertText: [
            ...this.state.alertText,
            "Credit card number is required.",
            "Expiry date is required.",
          ],
          open: true,
        });
        break;
      case cardholderName !== "" &&
        cardNumber === "" &&
        expiryDate !== "" &&
        cvv === "":
        this.setState({
          alertText: [
            ...this.state.alertText,
            "Credit card number is required.",
            "CVV is required.",
          ],
          open: true,
        });
        break;

      case cardholderName === "" &&
        cardNumber !== "" &&
        expiryDate !== "" &&
        cvv === "":
        this.setState({
          alertText: [
            ...this.state.alertText,
            "Please enter cardholder name",
            "CVV is required.",
          ],
          open: true,
        });
        break;

      case cardholderName === "" &&
        cardNumber !== "" &&
        expiryDate === "" &&
        cvv !== "":
        this.setState({
          alertText: [
            ...this.state.alertText,
            "Please enter cardholder name",
            "Expiry date is required.",
          ],
          open: true,
        });
        break;
      case cardholderName === "":
        this.setState({
          alertText: [...this.state.alertText, "Please enter cardholder name"],
          open: true,
        });
        break;
      case cardNumber === "":
        this.setState({
          alertText: [
            ...this.state.alertText,
            "Credit card number is required.",
          ],
          open: true,
        });
        break;
      case expiryDate === "":
        this.setState({
          alertText: [...this.state.alertText, "Expiry date is required."],
          open: true,
        });
        break;
      case cvv === "":
        this.setState({
          alertText: [...this.state.alertText, "CVV is required."],
          open: true,
        });
        break;
      case !/^\d{16}$/.test(cardNumber):
        this.setState({
          alertText: [...this.state.alertText, "Invalid credit card number."],
          open: true,
        });
        break;
      case !/^\d{3,4}$/.test(cvv):
        this.setState({
          alertText: [...this.state.alertText, "Invalid CVV."],
          open: true,
        });
        break;
      default:
        return "Valid";
    }
  }

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.setState({ alertText: [] });
  };

  render() {
    const { open } = this.state;
    return (
      <>
        <Grid>
          <Grid item xs={12} style={ChangePaymentStyle.mainContainerStyle}>
            <Grid item xs={12} style={ChangePaymentStyle.firstComponentStyle}>
              <p style={ChangePaymentStyle.firstComponentPreStyle}>
                Billing -&gt; <span style={{color:'#2c387e'}}>Change Payment Method</span>
              </p>
            </Grid>
            <Grid style={ChangePaymentStyle.secondComponentGrid}>
              <Grid
                container
                columns={12}
                style={ChangePaymentStyle.secondComponentStyle}
              >
                <Grid item xs={12} md={6}>
                  <Grid
                    style={ChangePaymentStyle.secondComponentInputGridStyle}
                  >
                    <label style={ChangePaymentStyle.secondComponentLableStyle}>
                      Cardholder Name
                    </label>
                    <br />
                    <input
                      name="cardholderName"
                      type="text"
                      value={this.state.cardData.name}
                      style={ChangePaymentStyle.secondComponentInputStyle}
                      onChange={(e) => this.creditCardDetaisHandler(e)}
                    />
                  </Grid>
                  <Grid
                    style={ChangePaymentStyle.secondComponentInputGridStyle}
                  >
                    <label style={ChangePaymentStyle.secondComponentLableStyle}>
                      Expiry Date{" "}
                    </label>
                    <br />
                    <input
                      name="expiryDate"
                      type="date"
                      style={ChangePaymentStyle.secondComponentInputStyle}
                      onChange={(e) => this.creditCardDetaisHandler(e)}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Grid
                    style={ChangePaymentStyle.secondComponentInputGridStyle}
                  >
                    <label style={ChangePaymentStyle.secondComponentLableStyle}>
                      Credit Card Number
                    </label>
                    <br />
                    <input
                      name="cardNumber"
                      type="text"
                      style={ChangePaymentStyle.secondComponentInputStyle}
                      onChange={(e) => this.creditCardDetaisHandler(e)}
                    />
                  </Grid>
                  <Grid
                    style={ChangePaymentStyle.secondComponentInputGridStyle}
                  >
                    <label style={ChangePaymentStyle.secondComponentLableStyle}>
                      CVV
                    </label>
                    <br />
                    <input
                      name="cvv"
                      type="text"
                      style={ChangePaymentStyle.secondComponentInputStyle}
                      onChange={(e) => this.creditCardDetaisHandler(e)}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box style={{ width: 500 }}>
              {this.state.alertText.map((v, index) => (
                <Snackbar
                  key={index}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  open={open}
                  onClose={this.handleClose}
                  maxSnack={1}
                  style={{
                    marginBottom:
                      index === 3
                        ? "260px"
                        : "0" && index === 2
                        ? "200px"
                        : "0" && index === 1
                        ? "140px"
                        : "0" && index === 0
                        ? "80px"
                        : "0",
                  }}
                >
                  <Grid
                    style={ChangePaymentStyle.snackbarStyle}
                    onClick={this.handleClose}
                  >
                    <ErrorOutlineTwoToneIcon
                      style={ChangePaymentStyle.snackbarIcon}
                    />
                    <p style={ChangePaymentStyle.snackbarText}>{v}</p>
                  </Grid>
                </Snackbar>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} style={ChangePaymentStyle.buttonGridStyle}>
            <Button
              style={ChangePaymentStyle.buttonStyle}
              onClick={() => this.validationData()}
            >
              Save Change
            </Button>
          </Grid>
        </Grid>
      </>
    );
  }
}

const ChangePaymentStyle = {
  mainContainerStyle: {
    border: "1px solid #e0e0e0",
    margin: "10px",
    borderRadius: "5px",
    fontSize: "16px",
  },
  firstComponentStyle: {
    borderBottom: "1px solid #e0e0e0",
    padding: "8px",
    paddingLeft: "15px",
    fontSize: "16px",
  },
  firstComponentPreStyle: {
    fontSize: "17px",
    fontWeight: "700",
    color:'#9e9e9e'
  },

  secondComponentGrid: {
    height: "75vh",
    minHeight: "58vh",
    width: "100%",
  },
  secondComponentStyle: {
    margin: "5px",
    marginTop: "10px",
  },
  secondComponentInputGridStyle: {
    marginLeft:'5px',
    marginRight:'5px',
    marginTop:'20px'
  },
  secondComponentLableStyle: {
    fontSize: "15px",
    fontWeight: "600",
  },
  secondComponentInputStyle: {
    width: "93%",
    height: "40px",
    margin: "5px",
    border: "1px solid #000",
    borderRadius: "10px",
    fontSize: "20px",
  },

  buttonGridStyle: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "10px",
    marginTop: "2%",
  },

  buttonStyle: {
    color: "#fff",
    backgroundColor: "#2d4063",
    maxWidth: "170px",
    fontSize: "14px",
  },

  snackbarStyle: {
    display: "flex",
    padding: "5px",
    backgroundColor: "#fff",
    color: "red",
    maxWidth: "100%",
    boxShadow: "2px 2px 9px #bdbdbd,2px 2px 10px #bdbdbd,2px 2px 5px #bdbdbd",
    borderRadius: "5px",
  },

  snackbarIcon: {
    margin: "5px",
  },

  snackbarText: {
    margin: "5px",
    color: "#000",
    fontSize: "14px",
  },
};