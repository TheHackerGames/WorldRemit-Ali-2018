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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var api = 'https://hackthonapi-webapp-wr.azurewebsites.net';

var Journal = function (_Component) {
  _inherits(Journal, _Component);

  function Journal(props, context) {
    _classCallCheck(this, Journal);

    var _this = _possibleConstructorReturn(this, (Journal.__proto__ || Object.getPrototypeOf(Journal)).call(this, props, context));

    _this.pollTimer = {};

    _this.state = {
      fetching: true,
      entries: []
    };
    return _this;
  }

  _createClass(Journal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.pollTimer = setInterval(function () {
        fetch(api + '/journal?heroId=1', {
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
            entries: json
          });
        }).catch(function (error) {
          console.error('Error making API call: ' + error.message);
        });
      }, 500);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.pollTimer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

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
          if (_this3.state.entries.length > 0) {
            return _react2.default.createElement(
              'div',
              null,
              _this3.state.entries.map(function (entry, index) {
                var date = (0, _moment2.default)(entry.dateTime);
                var meta = {
                  leftPart: date.format('H:m A')
                };

                return _react2.default.createElement(_listItem2.default, { key: index,
                  image: '/images/icon-' + entry.entryType + '.svg',
                  title: entry.title,
                  days: 'Today',
                  meta: meta,
                  description: entry.description
                });
              })
            );
          } else {
            return _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'p',
                null,
                'Hi Josh, this is where all your journal logs will appear.'
              )
            );
          }
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
            'Journal'
          ),
          _react2.default.createElement('br', null),
          content()
        ),
        _react2.default.createElement(
          'div',
          { className: 'setupFooter' },
          _react2.default.createElement(_nav2.default, { activeItem: 'journal' })
        )
      );
    }
  }]);

  return Journal;
}(_react.Component);

exports.default = Journal;