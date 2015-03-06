var util = require('util');
var wireup = require('../../').dir(__dirname);

// Same as wireup, except that the module is resolved relative to the root.
//   would fail if using require because justify's relative path is ../justify
//
var jsonify = wireup.rootRelative('./jsonify');

var data = {
  purpose: 'shows that modules may wireup root relative'
};

util.log(jsonify(data));

