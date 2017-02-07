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

const AcknowlegementsTextStyle = {
  fontSize: 8,
  fontFamily: "Avenir",
};

class Title extends Component {
  render() {
    return (
      <div style={CenteredStyle}>
        <text style={TitleTextStyle}>Fact Checker</text>
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

class Acknowlegements extends Component {
  render() {
    return (
      <footer style={CenteredStyle}>
        <text style={AcknowlegementsTextStyle}>built by Daniel Spokoyny, Tate Allen, etc</text>
      </footer>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <CheckerButton />
        <Acknowlegements />
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
