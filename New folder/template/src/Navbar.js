import React, { Component } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Avatar from "@mui/material/Avatar";
import Logo from "./logo/rTnrpap6c.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      pages: ["Home", "About us", "Why register", "Help"],
      settings: ["Home", "About us", "Why register", "Help"],
      anchorElNav: null,
      anchorElUser: null,
    };
  }

  handleOpenNavMenu = (event) => {
    this.setState({
      anchorElNav: event.currentTarget,
    });
  };

  handleOpenUserMenu = (event) => {
    this.setState({
      anchorElUser: event.currentTarget,
    });
  };

  handleCloseNavMenu = () => {
    this.setState({
      anchorElNav: null,
    });
  };

  handleCloseUserMenu = () => {
    this.setState({
      anchorElUser: null,
    });
  };
  render() {
    const { pages, settings, anchorElNav, anchorElUser } = this.state;
    return (
      <>
        <Grid container lg={12} style={navbar.firstComponent}>
          <AppBar position="static" style={navbar.firstComponent}>
            <Container maxWidth="xl" style={navbar.mainComponent}>
              <Toolbar disableGutters>
                <img src={Logo} style={navbar.imgStyle} alt="NavbarLogo"/>

                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={(event) => this.handleOpenNavMenu(event)}
                    
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={() => this.handleCloseNavMenu()}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem
                      style={{color:'#000'}}
                        key={page}
                        onClick={() => this.handleCloseNavMenu()}
                      >
                        <span textAlign="center" style={navbar.navbarTextStyle}>
                          {page}
                        </span>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {pages.map((page) => (
                    <Button
                      key={page}
                      style={navbar.navbarTextStyle}
                      onClick={() => this.handleCloseNavMenu()}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton
                      onClick={(event) => {
                        this.handleOpenUserMenu(event);
                      }}
                      sx={{ p: 0 }}
                    >
                      <Avatar
                        style={navbar.avtar}
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={this.handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem
                        key={setting}
                        onClick={this.handleCloseUserMenu}
                      >
                        <span
                          textAlign="center"
                          style={navbar.navbarTextStyle}
                        >
                          {setting}
                        </span>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </Grid>
      </>
    );
  }
}

const navbar = {
  firstComponent: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  mainComponent: {
    marginTop: "0.5%",
  },

  imgStyle: {
    width: "55px",
    height: "55px",
    marginRight: "2%",
  },

  navbarTextStyle: {
    
    color: "#000",
  },

  avtar: {
    border: "2px solid red",
  },
};




// import React, { Component } from "react";
// import Grid from "@material-ui/core/Grid";
// import Avatar from "@material-ui/core/Avatar";
// // import Logo from "./logo/rTnrpap6c.png";
// import AppBar from "@material-ui/core/AppBar";
// import Box from "@material-ui/core/Box";
// import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import Menu from "@material-ui/core/Menu";
// import MenuIcon from "@material-ui/icons/Menu";
// import Container from "@material-ui/core/Container";
// import Button from "@material-ui/core/Button";
// import Tooltip from "@material-ui/core/Tooltip";
// import MenuItem from "@material-ui/core/MenuItem";
