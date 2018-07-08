import { babel } from "docz-plugin-babel6";
import { css } from "docz-plugin-css";

export default {
  title: "React goodshare.js components",
  description: "Docs about React.js components for social share.",
  themeConfig: {
    colors: {
      primary: "tomato"
    }
  },
  plugins: [
    babel(),
    css({
      preprocessor: "postcss",
      cssmodules: true
    })
  ]
};
