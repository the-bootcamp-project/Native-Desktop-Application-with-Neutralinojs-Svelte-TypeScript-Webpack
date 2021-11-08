import { default as path } from 'path'
import type Webpack from 'webpack'
import type WebpackDev from 'webpack-dev-server'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

const SRC_DIR       = path.resolve(__dirname,'src')
const BUNDLE_DIR    = path.resolve(__dirname,'bundle')
const SCRIPT_DIR    = path.resolve(SRC_DIR,'scripts')

const mode = process.env['NODE_ENV'] ?? 'development'
const isProduction = mode === 'production'

const main: Configuration = {
    context:    path.resolve(__dirname),

	mode:       isProduction ? 'production' : 'development',
    watch:      isProduction ? false: true,
	devtool:    isProduction ? 'source-map' : 'eval-source-map',
	target:     'electron-main',

    /* Electron Main Script */
    entry: { main: path.resolve(SCRIPT_DIR,'main.ts') },
    output: { filename: '[name].js', path: BUNDLE_DIR },

    performance: {
        hints: isProduction ? false : undefined,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },

    plugins: [
        new ForkTsCheckerWebpackPlugin({ eslint: { files: './src/**/*.{ts,js}' } })
    ]
};

// This interface combines configuration from `webpack` and `webpack-dev-server`. You can add or override properties in this interface to change the config object type used above.
export interface Configuration extends Webpack.Configuration, WebpackDev.Configuration {}
export default main;
