'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
var router = _express2.default.Router();
/*eslint-enable*/

router.get('*', function (req, res) {
  res.render('index', { title: 'Ally' });
});

module.exports = router;