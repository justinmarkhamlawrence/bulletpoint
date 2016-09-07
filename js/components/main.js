var React = require('react');

var Main = React.createClass({
  render: function() {
    return (
      <div className='hi'>{this.props.message}</div>
    )
  }
})

module.exports = Main;
