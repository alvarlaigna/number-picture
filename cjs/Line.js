'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _constants = require('./constants');

var _helpers = require('./helpers');

var _AnimatedElement2 = require('./mixins/AnimatedElement');

var _AnimatedElement3 = _interopRequireDefault(_AnimatedElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = function (_AnimatedElement) {
  _inherits(Line, _AnimatedElement);

  function Line(props) {
    _classCallCheck(this, Line);

    var _this = _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).call(this, props));

    _this.displayName = 'Line';
    return _this;
  }

  _createClass(Line, [{
    key: 'getAttrNames',
    value: function getAttrNames() {
      return ['x1', 'x2', 'y1', 'y2'].concat(_constants.TWEENABLE_SVG_PRESENTATION_ATTRS);
    }
  }, {
    key: 'render',
    value: function render() {
      var className = this.props.className;

      return _react2.default.createElement('line', _extends({}, this.state, {
        className: className,
        style: this.getStyle(this.props)
      }, (0, _helpers.bindMouseEvents)(this.props)));
    }
  }]);

  return Line;
}(_AnimatedElement3.default);

exports.default = Line;


Line.propTypes = {
  x1: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.number]).isRequired,
  x2: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.number]).isRequired,
  y1: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.number]).isRequired,
  y2: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.number]).isRequired
};

Line.defaultProps = Object.assign({}, _AnimatedElement3.default.defaultProps);