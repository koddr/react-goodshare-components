"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _noImportant = require("aphrodite/no-important");

var _shareCounter = require("./share-counter");

var _shareCounter2 = _interopRequireDefault(_shareCounter);

var _ = require("../../../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Share counter component


// CSS-in-JS styles


// Facebook Button class


// Define props type


// Define state type
var FacebookButton = function (_React$PureComponent) {
  _inherits(FacebookButton, _React$PureComponent);

  function FacebookButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FacebookButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FacebookButton.__proto__ || Object.getPrototypeOf(FacebookButton)).call.apply(_ref, [this].concat(args))), _this), _this.shareWindowOpen = function (event) {
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


  _createClass(FacebookButton, [{
    key: "render",


    // Render provider
    value: function render() {
      // Define attributes
      var Element = this.props.renderAs;
      var ButtonName = this.props.buttonName;

      // Define styles
      var CONTAINER_BACKGROUND = void 0,
          CONTAINER_BACKGROUND_HOVER = void 0,
          CONTAINER_FONT_COLOR = void 0,
          CONTAINER_FONT_COLOR_HOVER = void 0,
          CONTAINER_BORDER = void 0,
          SHARE_COUNTER_BORDER_LEFT = void 0;

      // Define styles
      switch (this.props.buttonTheme) {
        case "outlined":
          CONTAINER_BACKGROUND = "rgb(255, 255, 255)";
          CONTAINER_BACKGROUND_HOVER = "rgb(59, 89, 152)";
          CONTAINER_FONT_COLOR = "rgb(59, 89, 152)";
          CONTAINER_FONT_COLOR_HOVER = "rgb(255, 255, 255)";
          CONTAINER_BORDER = "1px solid rgb(59, 89, 152)";
          SHARE_COUNTER_BORDER_LEFT = "1px solid rgba(59, 89, 152, 0.4)";
          break;
        case "gradient":
          CONTAINER_BACKGROUND = "linear-gradient(to top, rgb(59, 89, 152), rgb(89, 119, 182))";
          CONTAINER_BACKGROUND_HOVER = "linear-gradient(to top, rgb(89, 119, 182), rgb(59, 89, 152))";
          CONTAINER_FONT_COLOR = "rgb(255, 255, 255)";
          CONTAINER_FONT_COLOR_HOVER = "rgb(255, 255, 255)";
          CONTAINER_BORDER = "1px solid rgb(59, 89, 152)";
          SHARE_COUNTER_BORDER_LEFT = "1px solid rgba(255, 255, 255, 0.4)";
          break;
        default:
          CONTAINER_BACKGROUND = "rgb(59, 89, 152)";
          CONTAINER_BACKGROUND_HOVER = "rgb(59, 99, 162)";
          CONTAINER_FONT_COLOR = "rgb(255, 255, 255)";
          CONTAINER_FONT_COLOR_HOVER = "rgb(255, 255, 255)";
          CONTAINER_BORDER = "1px solid rgb(59, 89, 152)";
          SHARE_COUNTER_BORDER_LEFT = "1px solid rgba(255, 255, 255, 0.4)";
          break;
      }

      var Theme = _noImportant.StyleSheet.create({
        container: {
          background: CONTAINER_BACKGROUND,
          color: CONTAINER_FONT_COLOR,
          border: CONTAINER_BORDER,
          ":hover": {
            background: CONTAINER_BACKGROUND_HOVER,
            color: CONTAINER_FONT_COLOR_HOVER
          }
        },
        share_counter: {
          borderLeft: SHARE_COUNTER_BORDER_LEFT
        }
      });

      // Return element
      return React.createElement(
        Element,
        {
          className: (0, _noImportant.css)(_.Styles.container, Theme.container),
          onClick: this.shareWindowOpen
        },
        React.createElement(
          "span",
          { className: (0, _noImportant.css)(_.Styles.share_link) },
          ButtonName
        ),
        React.createElement(_shareCounter2.default, {
          className: (0, _noImportant.css)(_.Styles.share_counter, Theme.share_counter)
        })
      );
    }
  }]);

  return FacebookButton;
}(React.PureComponent);

FacebookButton.defaultProps = {
  title: document.title,
  url: document.location.href,
  buttonName: "Facebook",
  buttonTheme: "default",
  renderAs: "button"
};
exports.default = FacebookButton;