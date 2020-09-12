const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/wj/Documents/work/code/learn/test-ui/.docz/.cache/dev-404-page.js"))),
  "component---components-button-index-md": hot(preferDefault(require("/Users/wj/Documents/work/code/learn/test-ui/components/button/index.md"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/wj/Documents/work/code/learn/test-ui/.docz/src/pages/404.js")))
}

