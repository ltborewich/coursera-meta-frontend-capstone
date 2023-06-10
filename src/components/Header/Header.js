import React from "react";
import NavBar from "../Navbar/Navbar";
import "./Header.css";
import Logo from "../../assets/Logo.svg";

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="logo" width={210} />
      <NavBar />
    </header>
  );
}
