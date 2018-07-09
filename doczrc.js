import { babel } from "docz-plugin-babel6";
import { css } from "docz-plugin-css";

export default {
  dest: "docs",
  title: "React goodshare.js components",
  description: "Docs about React.js components for social share.",
  hashRouter: true,
  plugins: [
    babel(),
    css({
      preprocessor: "postcss",
      cssmodules: true
    })
  ]
};
