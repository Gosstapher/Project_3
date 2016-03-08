var React = require('react');
var PubList = require('./PubList.jsx');
var Map = require('../Map/map.js');

var MainView = React.createClass({

  getInitialState: function() {
    return {data: []};
  },

  fetchPubs: function(){
    var request = new XMLHttpRequest();
    request.open("GET", this.props.url);
    request.onload = function(){
      if(request.status === 200){
        var recievedPubs = JSON.parse(request.responseText);
        this.setState({data: recievedPubs});
      }
    }.bind(this)
    request.send(null);
  },

  createMap: function(){
    var centre = {lat: 55.924734, lng: -3.184194};
    var zoom = 11;
    var map = new Map(centre, zoom);
  },

  componentDidMount: function(){
    this.fetchPubs();
    // setInterval(this.fetchPubs, 1000);
    this.createMap();
  },

  render: function() {
    return (
      <div className="mainView">
        <h1 id="title">Pubs of Dùn Èideann</h1>
        <div id="left-side">
          <div id="map">
          </div>
        </div>
        <div id="right-side">
          <PubList data={this.state.data} />
        </div>
      </div>
    );
  }

})

module.exports = MainView;