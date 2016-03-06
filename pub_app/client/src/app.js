var React = require('react');
var ReactDOM = require('react-dom');
var MainView = require('./components/MainView.jsx');

window.onload = function(){
  ReactDOM.render(
    <MainView url="http://localhost:3000/pubs"/>,
    document.getElementById('app')
  );
}
