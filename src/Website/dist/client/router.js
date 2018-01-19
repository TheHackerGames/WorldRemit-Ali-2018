'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _appRoot = require('./app-root');

var _appRoot2 = _interopRequireDefault(_appRoot);

var _home = require('./home');

var _home2 = _interopRequireDefault(_home);

var _setupAlexa = require('./setupAlexa');

var _setupAlexa2 = _interopRequireDefault(_setupAlexa);

var _setupFitbit = require('./setupFitbit');

var _setupFitbit2 = _interopRequireDefault(_setupFitbit);

var _setupFinish = require('./setupFinish');

var _setupFinish2 = _interopRequireDefault(_setupFinish);

var _journal = require('./journal');

var _journal2 = _interopRequireDefault(_journal);

var _volunteers = require('./volunteers');

var _volunteers2 = _interopRequireDefault(_volunteers);

var _allies = require('./allies');

var _allies2 = _interopRequireDefault(_allies);

var _notfound = require('./notfound');

var _notfound2 = _interopRequireDefault(_notfound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppRouter = function AppRouter() {
  return _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/setup1', component: _setupAlexa2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/setup2', component: _setupFitbit2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/setup3', component: _setupFinish2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/volunteers', component: _volunteers2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/journal', component: _journal2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/allies', component: _allies2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '*', component: _notfound2.default })
  );
};

exports.default = AppRouter;