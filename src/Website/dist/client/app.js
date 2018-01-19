'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// match({history, routes}, (error, redirectLocation, renderProps) => {
// //   render(<Router {...renderProps}/>, document.querySelector('#app'));
// });
(0, _reactDom.render)(_react2.default.createElement(_router2.default, null), document.querySelector('#app'));
// import {Router, history, match} from 'react-router';