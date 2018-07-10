export const imports = {
  "src/brand-icons.mdx": () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-brand-icons" */ "src/brand-icons.mdx"),
  "src/index.mdx": () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-index" */ "src/index.mdx"),
  "src/providers/Facebook/facebook.mdx": () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-providers-facebook-facebook" */ "src/providers/Facebook/facebook.mdx")
};
