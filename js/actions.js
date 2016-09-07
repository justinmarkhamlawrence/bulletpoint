// new button click
  // data entry
  // date assignment
  // signifier assignment
  require('isomorphic-fetch');
  var FETCH_HELLO_SUCCESS = 'FETCH_HELLO_SUCCESS';
  var fetchHelloSuccess = function(message) {
      return {
          type: FETCH_HELLO_SUCCESS,
          message: message
      };
  };

  var FETCH_HELLO_ERROR= 'FETCH_DESCRIPTION_ERROR';
  var fetchHelloError = function(error) {
      return {
          type: FETCH_HELLO_ERROR,
          error: error
      };
  };
  var fetchData = function() {
   return function(dispatch) {
       var url = 'http://localhost:8080/all';
       return fetch(url).then(function(response) {
           if (response.status < 200 || response.status >= 300) {
               var error = new Error(response.statusText);
               error.response = response;
               throw error;
           }
           return response.json();
       })

       .then(function(data) {
               console.log("DATA", data);
           return dispatch(
               fetchHelloSuccess(data)
           );
       })
       .catch(function(error) {
           return dispatch(
               fetchHelloError(error)
           );
       });
   }
};

  exports.fetchData = fetchData;
  exports.FETCH_HELLO_SUCCESS = FETCH_HELLO_SUCCESS;
  exports.fetchHelloSuccess = fetchHelloSuccess;
  exports.FETCH_HELLO_ERROR = FETCH_HELLO_ERROR;
  exports.fetchHelloError = fetchHelloError;
