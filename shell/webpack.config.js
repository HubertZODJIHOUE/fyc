const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 3000, // Le Shell tourne sur le port 3000
        static: './dist',
    },
    entry: './src/index.js',
    output: {
        publicPath: 'http://localhost:3000/', // Chemin public pour le Shell
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Gérer les fichiers JS et JSX
                exclude: /node_modules/, // Ignorer node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Support React et ES6+
                    },
                },
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'shell',
            remotes: {
                app1: 'app1@http://localhost:3001/remoteEntry.js', // Intégration de APP 1
                app2: 'app2@http://localhost:3002/remoteEntry.js', // Intégration de APP 2
            },
        }),
        new HtmlWebpackPlugin({
            template: './index.html', // Génération du fichier HTML
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'], // Résolution automatique des extensions
    },
};
