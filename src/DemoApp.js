import React, { Component } from 'react';

import ProgressBar from './ProgressBar/ProgressBar';
import DemoButtons from './DemoButtons';

import './DemoApp.css';

class DemoApp extends Component {
  state = {
    valueDemo1: 0,
    valueDemo2: 90,
    valueDemo3: 0,
  };

  runProgressBar = ({ stateField, maxValue = 100, minValue = 0, inc = 5}) => {
    const interval = setInterval(() => {
      const value = this.state[stateField];

      if (inc >= 0 && value >= maxValue) {
        clearInterval(interval);
      } else if (inc < 0 && value <= minValue ) {
        clearInterval(interval);
      } else {
        this.setState({ [stateField]: value + inc });
      }
    }, 300);
  };

  resetDemo = (stateField, value = 0) => {
    this.setState({ [stateField]: value });
  };

  render() {
    return (
      <div className="app">
        <h1>Test app</h1>
        <div className="demos">
          <div className="demo">
            <DemoButtons
              handleRun={() => this.runProgressBar({ stateField: 'valueDemo1' })}
              handleReset={() => this.resetDemo('valueDemo1')}
            />
            <p className="info">Basic demonstration. Increases every 300ms.</p>
            <ProgressBar
              value={this.state.valueDemo1}
            />
          </div>
          <div className="demo">
            <DemoButtons
              handleRun={() => this.runProgressBar({ stateField: 'valueDemo2', maxValue: 90, minValue: 5, inc: -5 })}
              handleReset={() => this.resetDemo('valueDemo2', 90)}
            />
            <p className="info">Decreases every 300ms. Animation is turned off. Custom max and min value are supplied.</p>
            <ProgressBar
              value={this.state.valueDemo2}
              maxValue={90}
              minValue={5}
              animate={false}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DemoApp;
