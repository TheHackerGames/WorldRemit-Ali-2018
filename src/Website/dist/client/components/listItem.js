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

var ListItem = function (_Component) {
  _inherits(ListItem, _Component);

  function ListItem(props, context) {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call(this, props, context));
  }

  _createClass(ListItem, [{
    key: 'metaContent',
    value: function metaContent(meta) {
      var metaContent = meta.leftPart;

      if (meta.emphasised) {
        return _react2.default.createElement(
          'div',
          { className: 'meta' },
          metaContent,
          _react2.default.createElement(
            'em',
            null,
            meta.rightPart
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'meta' },
          metaContent,
          _react2.default.createElement(
            'span',
            null,
            meta.rightPart
          )
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'list-profile' },
        _react2.default.createElement(
          'div',
          { className: 'avatar' },
          _react2.default.createElement('img', { src: this.props.image })
        ),
        _react2.default.createElement(
          'div',
          { className: 'list-details' },
          _react2.default.createElement(
            'span',
            { className: 'daysago' },
            this.props.days
          ),
          _react2.default.createElement(
            'h3',
            null,
            this.props.title
          ),
          this.metaContent(this.props.meta),
          this.props.description && _react2.default.createElement(
            'div',
            { className: 'description' },
            this.props.description
          )
        )
      );
    }
  }]);

  return ListItem;
}(_react.Component);

exports.default = ListItem;