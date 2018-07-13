(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    "./src/brand-icons.mdx": function(e, n, o) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var a,
        t = o("./node_modules/react/index.js"),
        s = (a = t) && a.__esModule ? a : { default: a },
        r = o("./node_modules/@mdx-js/tag/dist/index.js");
      n.default = function(e) {
        var n = e.components;
        return s.default.createElement(
          r.MDXTag,
          { name: "wrapper", components: n },
          s.default.createElement(
            r.MDXTag,
            { name: "h1", components: n, props: { id: "brand-icons" } },
            s.default.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#brand-icons" }
              },
              s.default.createElement(
                r.MDXTag,
                {
                  name: "span",
                  components: n,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Brand icons"
          ),
          s.default.createElement(
            r.MDXTag,
            { name: "p", components: n },
            "We're recommend to use ",
            s.default.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "p",
                props: {
                  href: "https://github.com/FortAwesome/react-fontawesome"
                }
              },
              "FontAwesome 5 for React"
            ),
            " to show high quality SVG brand icons."
          ),
          s.default.createElement(
            r.MDXTag,
            { name: "pre", components: n },
            s.default.createElement(
              r.MDXTag,
              {
                name: "code",
                components: n,
                parentName: "pre",
                props: { className: "language-jsx" }
              },
              "// FontAwesome Facebook icon\nimport { faFacebook } from '@fortawesome/free-brands-svg-icons'\n// React goodshare.js components\nimport { FacebookButton } from \"react-goodshare-components\";\n\n<FacebookButton icon={faFacebook} />\n"
            )
          )
        );
      };
    }
  }
]);
