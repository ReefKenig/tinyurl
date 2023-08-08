// Imports
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Navbar: React.FC<{}> = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" paddingRight={"20px"}>
          <Link to="/">Home</Link>
        </Typography>
        <Typography variant="h6" paddingRight={"20px"}>
          <Link to="/create">Create TinyUrl</Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/management">Manage TinyURLs</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
