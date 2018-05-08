import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-materialize'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>DriveBuy</h1>
        <img className="backg" src="https://i.pinimg.com/originals/1b/86/a0/1b86a0b04e751888345a63d5a0257b67.jpg" />
        <Button floating large className="red-button" icon="add" />
      </div>
    );
  }
}

export default App;
