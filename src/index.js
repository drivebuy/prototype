import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Park from './Info';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Park />, document.getElementById('root'));
registerServiceWorker();
