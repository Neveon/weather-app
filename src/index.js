import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import App from './App';
import Loading from './components/Loading';

ReactDOM.render(<Loading />, document.getElementById('root'));

setTimeout(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
}, 2500);
