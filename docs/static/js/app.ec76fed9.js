(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    "./.docz/app/config.json": function(e) {
      e.exports = {
        title: "React goodshare.js components",
        description: "Docs about React.js components for social share.",
        colors: { primary: "tomato" }
      };
    },
    "./.docz/app/entries.json": function(e) {
      e.exports = {
        "src/index.mdx": {
          name: "About",
          order: 1,
          route: "/",
          id: "01CHYWZ43KG63EST04ZP7Q46JF",
          filepath: "src/index.mdx",
          slug: "src-index",
          menu: null,
          headings: [
            {
              depth: 1,
              slug: "react-goodsharejs-components",
              value: "React goodsharejs components"
            }
          ]
        },
        "src/providers/Facebook/facebook.mdx": {
          name: "Facebook",
          route: "/facebook",
          menu: "Providers",
          order: 1,
          id: "01CHYWZ43NXVQ58J4V1SEXNXY2",
          filepath: "src/providers/Facebook/facebook.mdx",
          slug: "src-providers-facebook-facebook",
          headings: [
            { depth: 1, slug: "facebook", value: "Facebook" },
            {
              depth: 2,
              slug: "full-styled-component",
              value: "Full styled component"
            },
            {
              depth: 3,
              slug: "available-props-for-full-component",
              value: "Available props for full component"
            },
            {
              depth: 2,
              slug: "only-share-component",
              value: "Only share component"
            },
            {
              depth: 3,
              slug: "share-component-props",
              value: "Share component props"
            },
            {
              depth: 2,
              slug: "only-share-counter-component",
              value: "Only share counter component"
            },
            {
              depth: 3,
              slug: "share-counter-component-props",
              value: "Share counter component props"
            }
          ]
        }
      };
    },
    "./.docz/app/imports.js": function(e, o, n) {
      "use strict";
      Object.defineProperty(o, "__esModule", { value: !0 });
      o.imports = {
        "src/index.mdx": function() {
          return Promise.all([n.e(0), n.e(2)]).then(
            n.t.bind(null, "./src/index.mdx", 7)
          );
        },
        "src/providers/Facebook/facebook.mdx": function() {
          return Promise.all([n.e(0), n.e(1)]).then(
            n.t.bind(null, "./src/providers/Facebook/facebook.mdx", 7)
          );
        }
      };
    },
    "./.docz/app/index.jsx": function(e, o, n) {
      "use strict";
      var t = c(n("./node_modules/react/index.js")),
        r = c(n("./node_modules/react-dom/index.js")),
        s = n("./.docz/app/imports.js"),
        d = c(n("./.docz/app/root.jsx"));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var a = [],
        u = [],
        l = function() {
          return u.forEach(function(e) {
            return e && e();
          });
        },
        p = document.querySelector("#root");
      (function() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : d.default;
        a.forEach(function(e) {
          return e && e();
        }),
          r.default.render(
            t.default.createElement(e, { imports: s.imports }),
            p,
            l
          );
      })(d.default);
    },
    "./.docz/app/root.jsx": function(e, o, n) {
      "use strict";
      (function(e) {
        Object.defineProperty(o, "__esModule", { value: !0 });
        var t = a(n("./node_modules/react/index.js")),
          r = n("./node_modules/react-hot-loader/index.js"),
          s = a(n("./node_modules/docz-theme-default/dist/index.m.js")),
          d = a(n("./.docz/app/config.json")),
          c = a(n("./.docz/app/entries.json"));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var u = function(e) {
          var o = e.imports;
          return t.default.createElement(s.default, {
            config: d.default,
            entries: c.default,
            imports: o,
            hashRouter: !1
          });
        };
        (o.default = (0, r.hot)(e)(u)),
          (u.__docgenInfo = { description: "", methods: [] });
      }.call(this, n("./node_modules/webpack/buildin/module.js")(e)));
    },
    0: function(e, o, n) {
      n("./node_modules/docz-core/node_modules/babel-polyfill/lib/index.js"),
        (e.exports = n("./.docz/app/index.jsx"));
    }
  },
  [[0, 3, 0]],
  [0, 1, 2]
]);
