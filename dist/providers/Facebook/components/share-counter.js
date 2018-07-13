"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Facebook Share Counter class


// Define props type


// Define state type
var FacebookShareCounter = function (_React$PureComponent) {
  _inherits(FacebookShareCounter, _React$PureComponent);

  function FacebookShareCounter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FacebookShareCounter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FacebookShareCounter.__proto__ || Object.getPrototypeOf(FacebookShareCounter)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      count: 0
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // Set default props


  // Set default state


  _createClass(FacebookShareCounter, [{
    key: "componentDidMount",


    /**
     * Share counter show function.
     *
     * @return {object} show share counter
     */
    value: function componentDidMount() {
      var _this2 = this;

      // Fetch counter data
      fetch(
      // prettier-ignore
      "https://graph.facebook.com/?id=" + encodeURIComponent(this.props.url)).then(function (response) {
        return response.json();
      }).then(function (result) {
        // Set state with share counter
        if (result.share) {
          _this2.setState({
            count: parseInt(result.share.share_count)
          });
        }
      }, function (error) {
        // Console errors
        console.log(error);
      });
    }

    // Render provider

  }, {
    key: "render",
    value: function render() {
      // Define attributes
      var Element = this.props.renderAs;
      var ClassName = this.props.className;
      // Return element
      return React.createElement(
        Element,
        { className: ClassName },
        this.state.count
      );
    }
  }]);

  return FacebookShareCounter;
}(React.PureComponent);

FacebookShareCounter.defaultProps = {
  url: document.location.href,
  renderAs: "span"
};
exports.default = FacebookShareCounter;