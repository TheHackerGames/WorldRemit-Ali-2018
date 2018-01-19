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

var SetupFinish = function (_Component) {
  _inherits(SetupFinish, _Component);

  function SetupFinish(props, context) {
    _classCallCheck(this, SetupFinish);

    return _possibleConstructorReturn(this, (SetupFinish.__proto__ || Object.getPrototypeOf(SetupFinish)).call(this, props, context));
  }

  _createClass(SetupFinish, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var tipStyle = {
        textAlign: 'left',
        padding: '0 1.5rem'
      };

      return _react2.default.createElement(
        'div',
        { className: 'setup' },
        _react2.default.createElement(
          'div',
          { className: 'copy' },
          _react2.default.createElement(
            'h1',
            null,
            'Almost there...'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Lastly we need you to do a couple of things for us, please say to your Alexa: ',
            _react2.default.createElement(
              'span',
              { className: 'highlight' },
              '\u2018Alexa, let\u2019s finish setting up\u2019'
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'list-item delay10' },
            _react2.default.createElement(
              'h3',
              null,
              'Place a picture or object on your bedside'
            ),
            _react2.default.createElement(
              'div',
              null,
              'It can be anything meaningful that reminds you of the present'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'list-item delay20' },
            _react2.default.createElement(
              'h3',
              null,
              'Choose sounds that you find calming'
            ),
            _react2.default.createElement(
              'div',
              null,
              'This could be helpful later'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'list-item delay30' },
            _react2.default.createElement(
              'h3',
              null,
              'Place a picture or object on your bedside'
            ),
            _react2.default.createElement(
              'div',
              null,
              'It can be anything meaningful that reminds you of the present'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'setupFooter' },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: 'volunteers' },
            _react2.default.createElement(
              'div',
              { className: 'button button-inverted' },
              'Skip for now'
            )
          )
        )
      );
    }
  }]);

  return SetupFinish;
}(_react.Component);

exports.default = SetupFinish;