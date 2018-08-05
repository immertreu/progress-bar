import React, { Component } from 'react';

import ProgressBar from '../ProgressBar/ProgressBar';
import DemoButtons from './DemoButtons';

import '../DemoStyles/DemoApp.css';
import '../DemoStyles/Demo3.css';

class DemoApp extends Component {
  state = {
    valueDemo1: 0,
    valueDemo2: 90,
    valueDemo3: 0,
  };

  runProgressBar = ({ stateField, maxValue = 100, minValue = 0, inc = 5}) => {
    if (!inc) {
      return;
    }

    this.interval = setInterval(() => {
      const value = this.state[stateField];

      const hasReachedMax = inc > 0 && value >= maxValue;
      const hasReachedMin = inc < 0 && value <= minValue;

      if (hasReachedMax || hasReachedMin) {
        clearInterval(this.interval);
      } else {
        this.setState({ [stateField]: value + inc });
      }
    }, 300);
  };

  resetDemo = (stateField, value = 0) => {
    clearInterval(this.interval);
    this.setState({ [stateField]: value });
  };

  render() {
    return (
      <div className="app">
        <h1>Progress Bar Demo</h1>
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
              handleRun={() => this.runProgressBar({ stateField: 'valueDemo2', maxValue: 90, minValue: 5, inc: -3.5 })}
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
          <div className="demo">
            <DemoButtons
              handleRun={() => this.runProgressBar({ stateField: 'valueDemo3' })}
              handleReset={() => this.resetDemo('valueDemo3')}
            />
            <p className="info">Custom styling demonstration. Has more glitter.</p>
            <ProgressBar
              value={this.state.valueDemo3}
              decoClass="progress-bar-demo-deco"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DemoApp;
