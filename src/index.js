import React from 'react';
import ReactDOM from 'react-dom';
import App from './script/App';
import * as serviceWorker from './script/serviceWorker';
ReactDOM.render(<App />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
