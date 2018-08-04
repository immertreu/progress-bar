import React from 'react';
import PropTypes from 'prop-types';

const DemoButtons = ({
  handleRun,
  handleReset
}) => (
  <div className="demo-buttons">
    <button
      className="demo-button demo-button-run"
      onClick={handleRun}
    >
      Run
    </button>
    <button
      className="demo-button demo-button-reset"
      onClick={handleReset}
    >
      Reset
    </button>
  </div>
);

DemoButtons.displayName = 'DemoButtons';
DemoButtons.propTypes = {
  handleRun: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default DemoButtons;