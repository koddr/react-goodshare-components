export const imports = {
  "src/index.mdx": () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-index" */ "src/index.mdx"),
  "src/providers/Facebook/facebook.mdx": () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-providers-facebook-facebook" */ "src/providers/Facebook/facebook.mdx")
};
