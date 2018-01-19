'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('es6-promise/auto');

require('isomorphic-fetch');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _nav = require('./nav');

var _nav2 = _interopRequireDefault(_nav);

var _listItem = require('./listItem');

var _listItem2 = _interopRequireDefault(_listItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var api = 'https://hackthonapi-webapp-wr.azurewebsites.net';

var Allies = function (_Component) {
  _inherits(Allies, _Component);

  function Allies(props, context) {
    _classCallCheck(this, Allies);

    var _this = _possibleConstructorReturn(this, (Allies.__proto__ || Object.getPrototypeOf(Allies)).call(this, props, context));

    _this.state = {
      fetching: true,
      allies: []
    };
    return _this;
  }

  _createClass(Allies, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch(api + '/heroes/1/contacts', {
        mode: 'cors',
        headers: {
          Accept: 'application/json'
        }
      }).then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok');
      }).then(function (json) {
        _this2.setState({
          fetching: false,
          allies: json
        });
      }).catch(function (error) {
        console.error('Error making API call: ' + error.message);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var tipStyle = {
        textAlign: 'left',
        padding: '0 1.5rem'
      };

      var content = function content() {
        if (_this3.state.fetching) {
          return _react2.default.createElement(
            'div',
            { className: 'graphic' },
            _react2.default.createElement(
              'div',
              { className: 'loader' },
              'Loading...'
            )
          );
        } else {
          return _react2.default.createElement(
            'div',
            null,
            _this3.state.allies.map(function (ally, index) {
              var meta = {
                leftPart: ally.address + ' \xB7 ',
                rightPart: 'Online now',
                emphasised: true
              };

              return _react2.default.createElement(_listItem2.default, {
                key: index,
                image: ally.profilePicture,
                days: ally.date,
                title: ally.name,
                meta: meta
              });
            })
          );
        }
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
            'Your Allies'
          ),
          _react2.default.createElement('br', null),
          content()
        ),
        _react2.default.createElement(
          'div',
          { className: 'setupFooter' },
          _react2.default.createElement(_nav2.default, { activeItem: 'allies' })
        )
      );
    }
  }]);

  return Allies;
}(_react.Component);

exports.default = Allies;