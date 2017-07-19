import React, { Component } from 'react';
import logo from '../logo.svg'

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-faded navigation">
        <div className="navbar-brand" >
          <img src={logo} width="60" height="60" className="d-inline-block align-middle" alt=""/>
          <span className="nav-header">Play What?!</span>
        </div>
      </nav>
    );
  }
}


export default NavBar;
