/** Declaring dependencies */
var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;
var Main = require('./components/main');

var store = require('./store');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
      <Provider store={store}>
      <Main message={'hi, from React!'}/>
      </Provider>,
      document.getElementById('app')
    );
});
