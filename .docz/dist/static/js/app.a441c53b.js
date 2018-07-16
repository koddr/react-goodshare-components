(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    "./.docz/app/config.json": function(e) {
      e.exports = {
        title: "React goodshare.js components",
        description: "Docs about React.js components for social share."
      };
    },
    "./.docz/app/entries.json": function(e) {
      e.exports = {
        "src/brand-icons.mdx": {
          name: "Brand icons",
          order: 1,
          route: "/brand-icons",
          id: "01CJD1163TA52Y1MCWHCK9SPKY",
          filepath: "src/brand-icons.mdx",
          slug: "src-brand-icons",
          menu: null,
          headings: [{ depth: 1, slug: "brand-icons", value: "Brand icons" }]
        },
        "src/index.mdx": {
          name: "About",
          order: 2,
          route: "/",
          id: "01CJD1163W4QHS5529NMT0ZACN",
          filepath: "src/index.mdx",
          slug: "src-index",
          menu: null,
          headings: [
            {
              depth: 1,
              slug: "react-goodsharejs-components",
              value: "React goodsharejs components"
            },
            { depth: 2, slug: "features", value: "Features" },
            { depth: 2, slug: "requirements", value: "Requirements" },
            { depth: 2, slug: "install", value: "Install" },
            { depth: 2, slug: "usage", value: "Usage" },
            {
              depth: 2,
              slug: "author--maintainers",
              value: "Author maintainers"
            },
            {
              depth: 3,
              slug: "your-assistance-will-help-make-project-even-better",
              value: "Your assistance will help make project even better"
            },
            {
              depth: 4,
              slug: "thanks-for-supporting",
              value: "Thanks for supporting"
            },
            { depth: 3, slug: "license", value: "License" }
          ]
        },
        "src/providers/Facebook/facebook.mdx": {
          name: "Facebook",
          route: "/facebook",
          menu: "Providers",
          order: 1,
          id: "01CJD1163WQ8NRVCR827JYDW4V",
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
              slug: "share-counter-beautify",
              value: "Share counter beautify"
            },
            { depth: 3, slug: "templates", value: "Templates" },
            {
              depth: 3,
              slug: "available-props-for-full-component",
              value: "Available props for full component"
            },
            {
              depth: 2,
              slug: "only-share-link-component",
              value: "Only share link component"
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
        "src/brand-icons.mdx": function() {
          return Promise.all([n.e(0), n.e(4)]).then(
            n.t.bind(null, "./src/brand-icons.mdx", 7)
          );
        },
        "src/index.mdx": function() {
          return Promise.all([n.e(0), n.e(3)]).then(
            n.t.bind(null, "./src/index.mdx", 7)
          );
        },
        "src/providers/Facebook/facebook.mdx": function() {
          return Promise.all([n.e(0), n.e(2)]).then(
            n.t.bind(null, "./src/providers/Facebook/facebook.mdx", 7)
          );
        }
      };
    },
    "./.docz/app/index.jsx": function(e, o, n) {
      "use strict";
      var t = u(n("./node_modules/react/index.js")),
        s = u(n("./node_modules/react-dom/index.js")),
        r = n("./.docz/app/imports.js"),
        a = u(n("./.docz/app/root.jsx"));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var d = [],
        l = [],
        c = function() {
          return l.forEach(function(e) {
            return e && e();
          });
        },
        i = document.querySelector("#root");
      (function() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : a.default;
        d.forEach(function(e) {
          return e && e();
        }),
          s.default.render(
            t.default.createElement(e, { imports: r.imports }),
            i,
            c
          );
      })(a.default);
    },
    "./.docz/app/root.jsx": function(e, o, n) {
      "use strict";
      (function(e) {
        Object.defineProperty(o, "__esModule", { value: !0 });
        var t = d(n("./node_modules/react/index.js")),
          s = n("./node_modules/react-hot-loader/index.js"),
          r = d(n("./node_modules/docz-theme-default/dist/index.m.js")),
          a = d(n("./.docz/app/config.json")),
          u = d(n("./.docz/app/entries.json"));
        function d(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var l = function(e) {
          var o = e.imports;
          return t.default.createElement(r.default, {
            config: a.default,
            entries: u.default,
            imports: o,
            hashRouter: !0
          });
        };
        (o.default = (0, s.hot)(e)(l)),
          (l.__docgenInfo = { description: "", methods: [] });
      }.call(this, n("./node_modules/webpack/buildin/module.js")(e)));
    },
    0: function(e, o, n) {
      n("./node_modules/docz-core/node_modules/babel-polyfill/lib/index.js"),
        (e.exports = n("./.docz/app/index.jsx"));
    }
  },
  [[0, 1, 0]],
  [0, 2, 4, 3]
]);
