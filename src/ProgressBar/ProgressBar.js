import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Styles/ProgressBar.css';

class ProgressBar extends Component {
  static displayName = 'ProgressBar';

  static propTypes = {
    value: PropTypes.number.isRequired,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    dimensionsClass: PropTypes.string,
    decoClass: PropTypes.string,
    animate: PropTypes.bool,
  };

  static defaultProps = {
    minValue: 0,
    maxValue: 100,
    dimensionsClass: '',
    decoClass: '',
    animate: true,
  };

  componentDidMount() {
    const {
      minValue,
      maxValue,
      value,
    } = this.props;

    if (minValue > maxValue) {
      throw new Error('Min value must be less than max value');
    }

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
    const distanceFromMin = value - minValue;
    return Math.round((distanceFromMin * 100) / distance);
  };

  formatPercentageString = (num) => `${num}%`;

  render() {
    const {
      decoClass,
      dimensionsClass,
      animate,
    } = this.props;

    const value = this.getValueAsPercentage();
    const stringValue = this.formatPercentageString(value);

    return (
      <div className={`progress-bar-wrapper progress-bar-default-dimensions progress-bar-default-deco ${decoClass} ${dimensionsClass}`}>
        <div className="progress-bar-track">
          <div
            className="progress-bar"
            style={{
              width: stringValue,
              transition: animate ? 'width 0.3s' : null,
            }}
          />
        </div>
        <p className="progress-bar-label">{stringValue}</p>
      </div>
    );
  }
}


export default ProgressBar;