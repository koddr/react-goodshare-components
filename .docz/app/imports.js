export const imports = {
  "dist/index.mdx": () =>
    import(/* webpackPrefetch: true, webpackChunkName: "dist-index" */ "dist/index.mdx"),
  "src/index.mdx": () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-index" */ "src/index.mdx"),
  "dist/providers/Facebook/facebook.mdx": () =>
    import(/* webpackPrefetch: true, webpackChunkName: "dist-providers-facebook-facebook" */ "dist/providers/Facebook/facebook.mdx"),
  "src/providers/Facebook/facebook.mdx": () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-providers-facebook-facebook" */ "src/providers/Facebook/facebook.mdx")
};
