const path = require('path');

exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
  }) => {
    actions.setWebpackConfig({
      resolve: {
          modules: [path.resolve(__dirname, '../src'), 'node_modules'],
          alias: {
              'test-ui/lib': path.resolve(__dirname, '../components/'),
              'test-ui/es': path.resolve(__dirname, '../components/'),
              'test-ui': path.resolve(__dirname, '../components/')
          }
      }
    })
  }