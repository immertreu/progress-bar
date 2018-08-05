import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DemoApp from './DemoComponents/DemoApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DemoApp />, document.getElementById('root'));
registerServiceWorker();
