/** Declaring dependencies */
var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var store = require('./store');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
      <Provider store={store}>
      </Provider>,
      document.getElementById('app')
    );
});
