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

// Facebook Share Link class


// Define Facebook props type
var FacebookShareLink = function (_React$PureComponent) {
  _inherits(FacebookShareLink, _React$PureComponent);

  function FacebookShareLink() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FacebookShareLink);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FacebookShareLink.__proto__ || Object.getPrototypeOf(FacebookShareLink)).call.apply(_ref, [this].concat(args))), _this), _this.shareWindowOpen = function (event) {
      // Prevent default event
      event.preventDefault();

      // Define window size
      var width = 640;
      var height = 320;

      // Define window position
      var left = screen.width / 2 - width / 2;
      var top = screen.height / 2 - height / 2;

      // Open window
      return window.open(
      // prettier-ignore
      "https://facebook.com/sharer/sharer.php?u=" + encodeURIComponent(_this.props.url) + "&t=" + _this.props.title, "Share this", "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top + ",location=no,toolbar=no,menubar=no");
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // Set default props


  /**
   * Share window open function.
   *
   * @param {function} event
   * @return {object} open pop-up window
   */


  _createClass(FacebookShareLink, [{
    key: "render",


    // Render provider
    value: function render() {
      // Define attributes
      var Element = this.props.renderAs;
      var ClassName = this.props.className;

      // Return element
      return React.createElement(
        Element,
        { className: ClassName, onClick: this.shareWindowOpen },
        this.props.buttonName
      );
    }
  }]);

  return FacebookShareLink;
}(React.PureComponent);

FacebookShareLink.defaultProps = {
  title: document.title,
  url: document.location.href,
  buttonName: "Facebook",
  renderAs: "span"
};
exports.default = FacebookShareLink;