import { babel } from "docz-plugin-babel6";
import { css } from "docz-plugin-css";

export default {
  base: "/react-goodshare-components/",
  dest: "docs",
  title: "React goodshare.js components",
  description: "Docs about React.js components for social share.",
  themeConfig: {
    colors: {
      primary: "tomato"
    }
  },
  hashRouter: true,
  plugins: [
    babel(),
    css({
      preprocessor: "postcss",
      cssmodules: true
    })
  ]
};
