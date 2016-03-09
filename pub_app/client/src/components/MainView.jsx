var React = require('react');
var PubList = require('./PubList.jsx');
var Map = require('../Map/map.js');

var MainView = React.createClass({

  getInitialState: function() {
    return {data: [], map: null};
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
    var centre = {lat: 55.936305, lng: -3.195873};
    var zoom = 12;
    var map = new Map(centre, zoom);
    this.setState({map: map});
    // map.addMarker(centre);
  },

  addMarker: function(latlng){
    var location = {lat: latlng[0], lng: latlng[1]};
    this.state.map.addMarker(location);
  },


  componentDidMount: function(){
    this.fetchPubs();
    // setInterval(this.fetchPubs, 1000);
    this.createMap();
    // this.addMarker();
  },

  render: function() {
    if(this.state.map){
      //remove all markers
      //if currentPub only show for that  
      //otherwise show markers for all pubs
      for(var pub of this.state.data){
        this.addMarker(pub.location.latlng);
      }
    }

    return (
      <div className="mainView">
        <h1 id="title">Pubs of Dùn Èideann</h1>
        <div id="left-side">
          <div id="map">
          </div>
        </div>
        <div id="right-side">
          <PubList data={this.state.data} map={this.state.map} />
        </div>
      </div>
    );
  }

})

module.exports = MainView;