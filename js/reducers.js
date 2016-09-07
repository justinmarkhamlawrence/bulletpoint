var initialHelloState = {message: "hello from redux initial state"};

var HelloReducer = function(state, action) {
   state = state || initialHelloState;
   return state;
};

exports.HelloReducer = HelloReducer;
