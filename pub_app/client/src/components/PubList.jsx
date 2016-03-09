var React = require('react');
var Map = require ('../Map/map.js');
var PubList = React.createClass({




  render: function() {
    var pubs = this.props.data.map(function(pub, index) {
      return (
        <div>
        <h3 id="pub-name">
          {pub.name}
        </h3>       
        <p>{pub.location.locationText}</p>
        </div>
      );
    });



    return (
      <div className="pubList">
        {pubs}
      </div>
    );
  }
});
module.exports = PubList;