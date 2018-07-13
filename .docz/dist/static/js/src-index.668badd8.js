(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    "./src/index.mdx": function(e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var t,
        o = n("./node_modules/react/index.js"),
        m = (t = o) && t.__esModule ? t : { default: t },
        r = n("./node_modules/@mdx-js/tag/dist/index.js");
      a.default = function(e) {
        var a = e.components;
        return m.default.createElement(
          r.MDXTag,
          { name: "wrapper", components: a },
          m.default.createElement(
            r.MDXTag,
            {
              name: "h1",
              components: a,
              props: { id: "react-goodsharejs-components" }
            },
            m.default.createElement(
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
              m.default.createElement(
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
          m.default.createElement(
            r.MDXTag,
            { name: "p", components: a },
            m.default.createElement(r.MDXTag, {
              name: "img",
              components: a,
              parentName: "p",
              props: {
                src: "https://badge.fury.io/js/react-goodshare-components.svg",
                alt: "npm version"
              }
            }),
            " ",
            m.default.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "p",
                props: { href: "https://reactjs.org" }
              },
              m.default.createElement(r.MDXTag, {
                name: "img",
                components: a,
                parentName: "a",
                props: {
                  src:
                    "https://img.shields.io/badge/React-16.x_or_newer-blue.svg?style=flat",
                  alt: "react js site"
                }
              })
            ),
            " ",
            m.default.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "p",
                props: {
                  href:
                    "https://github.com/koddr/react-goodshare-components/blob/master/LICENSE"
                }
              },
              m.default.createElement(r.MDXTag, {
                name: "img",
                components: a,
                parentName: "a",
                props: {
                  src:
                    "https://img.shields.io/badge/license-MIT-red.svg?style=flat",
                  alt: "license"
                }
              })
            )
          ),
          m.default.createElement(
            r.MDXTag,
            { name: "p", components: a },
            "React.js components for social share. A simple way to share a link on the pages of your website in the most popular (and not so) social networks. Powered by ",
            m.default.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "p",
                props: { href: "https://github.com/koddr/goodshare.js" }
              },
              "goodshare.js"
            ),
            " project."
          ),
          m.default.createElement(
            "p",
            { align: "center" },
            m.default.createElement("img", {
              width: "100%",
              src:
                "https://user-images.githubusercontent.com/11155743/42503084-66a22c8a-8440-11e8-9299-a7a859a301ee.png",
              alt: "react-goodshare-components logo"
            })
          ),
          m.default.createElement(
            r.MDXTag,
            { name: "h2", components: a, props: { id: "features" } },
            m.default.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#features" }
              },
              m.default.createElement(
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
            "Features"
          ),
          m.default.createElement(
            r.MDXTag,
            { name: "p", components: a },
            "React-ready",
            "\u2122",
            " components, simple install, extensive documentation, developer support, ",
            m.default.createElement(
              r.MDXTag,
              { name: "strong", components: a, parentName: "p" },
              "SEO friendly"
            ),
            ", many options for customization of appearance, ",
            m.default.createElement(
              r.MDXTag,
              { name: "strong", components: a, parentName: "p" },
              "clean code without scripts tracking user activity"
            ),
            " on the page, ",
            m.default.createElement(
              r.MDXTag,
              { name: "strong", components: a, parentName: "p" },
              "high speed"
            ),
            "."
          ),
          m.default.createElement(
            r.MDXTag,
            { name: "p", components: a },
            "Beautiful button design ",
            m.default.createElement(
              r.MDXTag,
              { name: "strong", components: a, parentName: "p" },
              "already included"
            ),
            ". Just open documentation, copy-paste and save!"
          ),
          m.default.createElement(
            r.MDXTag,
            { name: "p", components: a },
            "We're using ",
            m.default.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "p",
                props: { href: "https://flow.org/en/" }
              },
              "Flow"
            ),
            ": A ",
            m.default.createElement(
              r.MDXTag,
              { name: "strong", components: a, parentName: "p" },
              "Static Type"
            ),
            " Checker for JavaScript."
          ),
          m.default.createElement(
            r.MDXTag,
            { name: "h2", components: a, props: { id: "requirements" } },
            m.default.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#requirements" }
              },
              m.default.createElement(
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
            "Requirements"
          ),
          m.default.createElement(
            r.MDXTag,
            { name: "ul", components: a },
            m.default.createElement(
              r.MDXTag,
              { name: "li", components: a, parentName: "ul" },
              "React >= 16.x"
            ),
            m.default.createElement(
              r.MDXTag,
              { name: "li", components: a, parentName: "ul" },
              "React DOM >= 16.x"
            )
          ),
          m.default.createElement(
            r.MDXTag,
            { name: "h2", components: a, props: { id: "install" } },
            m.default.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#install" }
              },
              m.default.createElement(
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
            "Install"
          ),
          m.default.createElement(
            r.MDXTag,
            { name: "pre", components: a },
            m.default.createElement(
              r.MDXTag,
              {
                name: "code",
                components: a,
                parentName: "pre",
                props: { className: "language-bash" }
              },
              "$ npm i --save react-goodshare-components\n"
            )
          ),
          m.default.createElement(
            r.MDXTag,
            { name: "h2", components: a, props: { id: "usage" } },
            m.default.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#usage" }
              },
              m.default.createElement(
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
            "Usage"
          ),
          m.default.createElement(
            r.MDXTag,
            { name: "p", components: a },
            "Schema for name of React goodshare.js components:"
          ),
          m.default.createElement(
            r.MDXTag,
            { name: "ul", components: a },
            m.default.createElement(
              r.MDXTag,
              { name: "li", components: a, parentName: "ul" },
              m.default.createElement(
                r.MDXTag,
                { name: "inlineCode", components: a, parentName: "li" },
                "<...>Button"
              ),
              " \u2014 full styled component (include styles, share link and counter)"
            ),
            m.default.createElement(
              r.MDXTag,
              { name: "li", components: a, parentName: "ul" },
              m.default.createElement(
                r.MDXTag,
                { name: "inlineCode", components: a, parentName: "li" },
                "<...>ShareLink"
              ),
              " \u2014 only share link (include share link without any styles)"
            ),
            m.default.createElement(
              r.MDXTag,
              { name: "li", components: a, parentName: "ul" },
              m.default.createElement(
                r.MDXTag,
                { name: "inlineCode", components: a, parentName: "li" },
                "<...>ShareCounter"
              ),
              " \u2014 only share counter (include share counter without any styles)"
            )
          ),
          m.default.createElement(
            r.MDXTag,
            { name: "p", components: a },
            "Where ",
            m.default.createElement(
              r.MDXTag,
              { name: "inlineCode", components: a, parentName: "p" },
              "<...>"
            ),
            " is the name of social network or messenger (first letter is capital, of course). For example, if you're want to render Facebook social network all-in-one button (with share link, counter and awesome styles):"
          ),
          m.default.createElement(
            r.MDXTag,
            { name: "pre", components: a },
            m.default.createElement(
              r.MDXTag,
              {
                name: "code",
                components: a,
                parentName: "pre",
                props: { className: "language-jsx" }
              },
              'import { FacebookButton } from "react-goodshare-components";\n\n<FacebookButton />\n'
            )
          ),
          m.default.createElement(
            r.MDXTag,
            { name: "h2", components: a, props: { id: "author--maintainers" } },
            m.default.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#author--maintainers" }
              },
              m.default.createElement(
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
            "Author & maintainers"
          ),
          m.default.createElement(
            r.MDXTag,
            { name: "p", components: a },
            "Development and maintenance engaged by ",
            m.default.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "p",
                props: { href: "https://github.com/koddr" }
              },
              "Vic Sh\xf3stak"
            ),
            " (aka Koddr).\nIf you want to say \xabthank you\xbb and/or ask me about ",
            m.default.createElement(
              r.MDXTag,
              { name: "inlineCode", components: a, parentName: "p" },
              "react-goodshare-components"
            ),
            " \u2014 ",
            m.default.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "p",
                props: {
                  href:
                    "https://github.com/koddr/react-goodshare-components/issues/new"
                }
              },
              "create new issue"
            ),
            "."
          ),
          m.default.createElement(
            r.MDXTag,
            {
              name: "h3",
              components: a,
              props: {
                id: "your-assistance-will-help-make-project-even-better"
              }
            },
            m.default.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h3",
                props: {
                  "aria-hidden": !0,
                  href: "#your-assistance-will-help-make-project-even-better"
                }
              },
              m.default.createElement(
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
            "Your assistance will help make project even better!"
          ),
          m.default.createElement(
            r.MDXTag,
            { name: "ul", components: a },
            m.default.createElement(
              r.MDXTag,
              { name: "li", components: a, parentName: "ul" },
              m.default.createElement(
                r.MDXTag,
                {
                  name: "a",
                  components: a,
                  parentName: "li",
                  props: { href: "https://www.paypal.me/koddr/9.99usd" }
                },
                "Donate with PayPal or Credit Card"
              )
            ),
            m.default.createElement(
              r.MDXTag,
              { name: "li", components: a, parentName: "ul" },
              m.default.createElement(
                r.MDXTag,
                {
                  name: "a",
                  components: a,
                  parentName: "li",
                  props: {
                    href: "https://money.yandex.ru/to/41001601525977/599"
                  }
                },
                "Donate with Yandex.Money"
              )
            )
          ),
          m.default.createElement(
            r.MDXTag,
            {
              name: "h4",
              components: a,
              props: { id: "thanks-for-supporting" }
            },
            m.default.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h4",
                props: { "aria-hidden": !0, href: "#thanks-for-supporting" }
              },
              m.default.createElement(
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
            "Thanks for supporting!"
          ),
          m.default.createElement(r.MDXTag, { name: "hr", components: a }),
          m.default.createElement(
            r.MDXTag,
            { name: "h3", components: a, props: { id: "license" } },
            m.default.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h3",
                props: { "aria-hidden": !0, href: "#license" }
              },
              m.default.createElement(
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
            "License"
          ),
          m.default.createElement(
            r.MDXTag,
            { name: "p", components: a },
            m.default.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "p",
                props: {
                  href:
                    "https://github.com/koddr/react-goodshare-components/blob/master/LICENSE"
                }
              },
              "The MIT License (MIT)"
            )
          )
        );
      };
    }
  }
]);
