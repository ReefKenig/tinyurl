import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import axios from "axios";
import styles from "./navbar.module.css";

const Navbar: React.FC<{}> = () => {
  // const location = useLocation();
  // const [paths, setPaths]: any[] = useState([]);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   setPaths(["Home", "Create TinyURL", "All TinyURL"]);
  // }, [location]);

  return <nav className={styles.Navbar}>Nav</nav>;
};

export default Navbar;
