import React from "react";
import { Link } from "react-router-dom";
import "../Header/header.css";
import "../../layout/container.css";
import AccountBoxIcon from '@mui/icons-material/AccountBox';


const Header = () => {

  return (
    <header className="header">
      <h1>Round Robin</h1>
      <AccountBoxIcon/>
    </header>
  );
};

export default Header;
