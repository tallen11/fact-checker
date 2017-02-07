import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const CenteredStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const TitleTextStyle = {
  fontSize: 20,
  fontFamily: "Avenir",
  paddingTop: "10px",
  paddingBottom: "10px",
};

class Title extends Component {
  render() {
    return (
      <div style={CenteredStyle}>
        <text style={TitleTextStyle}>Fact Check pA 0.1</text>
      </div>
    );
  }
}

class CheckerButton extends Component {
  render() {
    return (
      <div style={CenteredStyle}>
        <button style={{width: "75%"}}>Check</button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <CheckerButton />
      </div>
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
