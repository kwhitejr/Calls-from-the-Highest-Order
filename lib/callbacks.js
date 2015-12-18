var datastore = require('./datastore.js');

function wait(seconds, callback) {
  console.log('wait ' + seconds + ' started');
  var n = seconds*1000;
  setTimeout(function(){return callback(seconds);}, n);
}

function repeat (times, callback) {
  var n = times;
  if (n !== 0) {
    (function() {return callback(times);})();
    n--;
    repeat(n, callback);
  }
}

function User () {

}

User.find = function(query, callback) {

  var self = this;
  var error = null;
  var users = datastore.User.filter(function(user) {
    for (var key in query) {
      if (user[key] === query[key]) {
        return true;
      }
    }
    return false;
  });

  for (var key in query) {
    if (!(user.hasOwnProperty(key))) {
      error = newRangeError;
    }
  }
  console.log(users);
  callback(error, users);

};

module.exports = {
  wait : wait,
  repeat : repeat,
  User : User
};

// wait(3, function(seconds) {
//   console.log('wait ' + seconds + ' done');
// });

// repeat(10, function(iteration) {
//   console.log(100+iteration);
// });

