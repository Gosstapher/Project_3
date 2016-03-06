var React = require('react');
var PubList = require('./PubList.jsx');


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

  componentDidMount: function(){
    this.fetchPubs();
    setInterval(this.fetchPubs, 1000);
  },

  render: function() {
    return (
      <div className="mainView">
        <h1>Pubs</h1>
        <PubList data={this.state.data} />
      </div>
    );
  }

})

module.exports = MainView;