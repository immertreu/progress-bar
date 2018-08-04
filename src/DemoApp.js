import React, { Component } from 'react';

import ProgressBar from './ProgressBar/ProgressBar';

import './DemoApp.css';

class DemoApp extends Component {
  state = {
    value: 0
  };

  runProgressBar = () => {
    const interval = setInterval(() => {
      const value = this.state.value;
      if (value >= 100) {
        clearInterval(interval);
      } else {
        this.setState({ value: value + 10 });
      }
    }, 100);
  };

  render() {
    return (
      <div className="app">
        <h1>Test app</h1>
        <div className="demos">
          <button onClick={this.runProgressBar}>Run</button>
          <ProgressBar value={this.state.value} />
        </div>
      </div>
    );
  }
}

export default DemoApp;
