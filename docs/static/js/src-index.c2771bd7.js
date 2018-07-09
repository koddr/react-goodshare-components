(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    "./src/index.mdx": function(e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var o,
        t = n("./node_modules/react/index.js"),
        s = (o = t) && o.__esModule ? o : { default: o },
        r = n("./node_modules/@mdx-js/tag/dist/index.js");
      a.default = function(e) {
        var a = e.components;
        return s.default.createElement(
          r.MDXTag,
          { name: "wrapper", components: a },
          s.default.createElement(
            r.MDXTag,
            {
              name: "h1",
              components: a,
              props: { id: "react-goodsharejs-components" }
            },
            s.default.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h1",
                props: {
                  "aria-hidden": !0,
                  href: "#react-goodsharejs-components"
                }
              },
              s.default.createElement(
                r.MDXTag,
                {
                  name: "span",
                  components: a,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "React goodshare.js components"
          ),
          s.default.createElement(
            r.MDXTag,
            { name: "p", components: a },
            "A simple way to share a link on the pages of your website in the most popular (and not so) social networks. "
          ),
          s.default.createElement(
            r.MDXTag,
            { name: "p", components: a },
            "Powered by goodshare.js project."
          )
        );
      };
    }
  }
]);
