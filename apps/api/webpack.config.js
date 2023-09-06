const { composePlugins, withNx } = require('@nx/webpack');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`

  config.watch = true;
  config.watchOptions = {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000,
  };

  return config;
});
