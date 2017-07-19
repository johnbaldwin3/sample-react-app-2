import React, { Component } from 'react';
import '../styles/App.css';


//import components
import NavBar from './NavBar';
import PlayListForm from './PlayListForm';
//import PlayList from './PlayList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <PlayListForm />
      </div>
    );
  }
}

export default App;
