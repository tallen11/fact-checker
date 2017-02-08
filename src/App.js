import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*global chrome*/

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
  padding: "10px",
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
        <button style={{width: "75%"}} onClick={(e) => {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
              chrome.tabs.sendMessage(tabs[0].id, {fact_req: "get_sel_txt"}, function(response) {
                console.log(response.farewell);
              });
            });
          }}>Check</button>
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
    );
  }
}

export default App;
