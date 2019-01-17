import React, { Component } from "react";
import diTo from "../images/di_to-do-p1.svg";
import diDo from "../images/di_to-do-p3.svg";

const Header = () => (
  <div className="main-header">
    <div className="di-to">
      <img alt="" src={diTo} />
    </div>
    <div className="di-logo-line" />
    <div className="di-do">
      <img alt="" src={diDo} />
    </div>
  </div>
);

export default Header;
