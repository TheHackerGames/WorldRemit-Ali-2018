'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SetupAlexa = function (_Component) {
  _inherits(SetupAlexa, _Component);

  function SetupAlexa(props, context) {
    _classCallCheck(this, SetupAlexa);

    return _possibleConstructorReturn(this, (SetupAlexa.__proto__ || Object.getPrototypeOf(SetupAlexa)).call(this, props, context));
  }

  _createClass(SetupAlexa, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'setup' },
        _react2.default.createElement(
          'div',
          { className: 'copy' },
          _react2.default.createElement(
            'h1',
            null,
            'Setup your Alexa'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Follow the instructions that come with your alexa. Make sure you place the Alexa device close to where it can hear you at night time.'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'graphic' },
          _react2.default.createElement('img', { src: '/images/echo.svg', alt: 'Alexa' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'setupFooter' },
          _react2.default.createElement(
            'div',
            { className: 'tip' },
            _react2.default.createElement(
              'strong',
              null,
              'Tap \u2018NEXT\u2019 when Alexa tells you to'
            )
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: 'setup2' },
            _react2.default.createElement(
              'div',
              { className: 'button' },
              'Next'
            )
          )
        )
      );
    }
  }]);

  return SetupAlexa;
}(_react.Component);

exports.default = SetupAlexa;