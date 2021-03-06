// main app file, insert our app into index.htm dom for root element

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppRoot />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
