import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import allReducers from './reducers';

// the main store is a single object that
// takes all combined reducer data objects
const store = createStore(allReducers);

ReactDOM.render(
	<h1>Hello world!</h1>,
    document.getElementById('root')
);
