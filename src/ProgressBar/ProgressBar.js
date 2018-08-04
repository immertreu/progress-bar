import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ProgressBar.css';

class ProgressBar extends Component {
  static displayName = 'ProgressBar';

  static propTypes = {
    value: PropTypes.number.isRequired,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    dimensionsClass: PropTypes.string,
    decoClass: PropTypes.string,
  };

  static defaultProps = {
    minValue: 0,
    maxValue: 100,
    dimensionsClass: 'progress-bar-default-dimensions',
    decoClass: 'progress-bar-default-deco',
  };

  componentDidMount() {
    const {
      minValue,
      maxValue,
      value,
    } = this.props;

    if (value > maxValue) {
      throw new Error('Initial value cannot be greater than max value');
    }

    if (value < minValue) {
      throw new Error('Initial value cannot be less than min value');
    }
  }

  getValueAsPercentage = () => {
    const {
      minValue,
      maxValue,
      value,
    } = this.props;

    if (value >= maxValue) {
      return 100;
    }

    if (value <= minValue) {
      return 0;
    }

    const distance = maxValue - minValue;

    return (value * 100) / distance;
  };

  formatPercentageString = (num) => `${num}%`;

  render() {
    const {
      decoClass,
      dimensionsClass,
    } = this.props;

    const value = this.getValueAsPercentage();
    const stringValue = this.formatPercentageString(value);

    return (
      <div className={`progress-bar-wrapper ${decoClass} ${dimensionsClass}`}>
        <div
          className="progress-bar"
          style={{
            width: stringValue,
          }}
        />
        <p className="progress-bar-label">{stringValue}</p>
      </div>
    );
  }
}


export default ProgressBar;