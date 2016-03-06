var React = require('react');

var PubList = React.createClass({
  render: function() {

    var pubs = this.props.data.map(function(pub, index) {
      return (
        <h4>
          {pub.name}
        </h4>
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