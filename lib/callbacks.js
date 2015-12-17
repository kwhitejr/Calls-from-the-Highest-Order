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
  (function() {
    var error = null;
    var users = datastore.User;
    return callback(error, users);
  })();
  for (var i = 0; i < users.length; i++) {
    var currentUser = users[i];
    for (var key in currentUser) {
      if (currentUser[key] === query[key]) {
        return currentUser;
      }
    }
  }
};

module.exports = {
  wait : wait,
  repeat : repeat,
  User : User
};

wait(3, function(seconds) {
  console.log('wait ' + seconds + ' done');
});

repeat(10, function(iteration) {
  console.log(100+iteration);
});