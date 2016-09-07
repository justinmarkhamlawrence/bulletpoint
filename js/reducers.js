var initialHelloState = {message: "hello from redux initial state!"};
var actions = require('./actions')
var HelloReducer = function(state, action) {
   state = state || initialHelloState;
//
   if(action.type === actions.FETCH_HELLO_SUCCESS){
     return {message: action.message.message}/*not a long term solution*/
   }
   else if (action.type === actions.FETCH_HELLO_ERROR){
     return {error: action.error}
   }
   return state;
};


exports.HelloReducer = HelloReducer;
