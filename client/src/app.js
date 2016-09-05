var React = require('react');
var ReactDOM = require('react-dom');
var FilmsBox = require('./components/FilmsBox')

window.onload = function(){
  ReactDOM.render(
    <FilmsBox />,
    document.getElementById('app')
  );
}
