const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
	webpack: {
		configure: (webpackConfig) => {
			webpackConfig.plugins = [
				...webpackConfig.plugins,

				new ModuleFederationPlugin({
					name: 'mfe-app',
					remotes: {
						app2: 'app2@http://localhost:3002/remoteEntry.js',
					},
					shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
				}),
			];
			return webpackConfig;
		},
	},
};
