import React, { Component } from 'react';
import logo from '../logo.svg'

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <div className="navbar-brand" >
          <img src={logo} width="50" height="50" className="d-inline-block align-middle" alt=""/>
          Music Playlist
        </div>
      </nav>
    );
  }
}


export default NavBar;
