"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FacebookShareCounter = exports.FacebookShareLink = exports.FacebookButton = exports.Styles = undefined;

var _Facebook = require("./providers/Facebook");

Object.defineProperty(exports, "FacebookButton", {
  enumerable: true,
  get: function get() {
    return _Facebook.FacebookButton;
  }
});
Object.defineProperty(exports, "FacebookShareLink", {
  enumerable: true,
  get: function get() {
    return _Facebook.FacebookShareLink;
  }
});
Object.defineProperty(exports, "FacebookShareCounter", {
  enumerable: true,
  get: function get() {
    return _Facebook.FacebookShareCounter;
  }
});

var _noImportant = require("aphrodite/no-important");

// Export components styles
var Styles = exports.Styles = _noImportant.StyleSheet.create({
  container: {
    display: "inline-flex",
    fontFamily: ["Helvetica", "Helvetica Neue", "Arial", "sans-serif"],
    fontWeight: "lighter",
    fontSize: 14,
    padding: "8px 12px",
    margin: 3,
    cursor: "pointer",
    borderRadius: 3
  },
  share_link: {
    flex: "1 1 auto"
  },
  share_counter: {
    flex: "0 0 auto",
    marginLeft: 6,
    paddingLeft: 6
  }
});

// Export providers
/**
 *  Vic Shóstak <koddr.me@gmail.com>
 *  Copyright (c) 2018 True web artisans https://webartisans.org
 *  http://opensource.org/licenses/MIT The MIT License (MIT)
 *
 *  react-goodshare-components v0.2.1 at 14/07/2018
 *
 *  React.js components for social share. A simple way to share a link
 *  on the pages of your website in the most popular (and not so)
 *  social networks. Powered by goodshare.js project.
 */