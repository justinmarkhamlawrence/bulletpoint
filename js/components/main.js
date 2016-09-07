var React = require('react');
var connect = require('react-redux').connect;

var Main = React.createClass({
  render: function() {
    return (
      <div className='hi'>{this.props.message}</div>
    )
  }
})

var mapStateToProps = function(state, props) {
    return {
        message: state.message
    };
};

var Container = connect(mapStateToProps)(Main);

module.exports = Container;
