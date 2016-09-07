var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions');

var Main = React.createClass({
  componentWillMount:function(){
    this.props.dispatch(actions.fetchData());
  },
  render: function() {
    return (
      <div className='hi'>{this.props.message}</div>
    )
  }
})

var mapStateToProps = function(state, props) {
  console.log(state);
    return {
        message: state.message
    };
};

var Container = connect(mapStateToProps)(Main);

module.exports = Container;
