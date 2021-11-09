import { default as path } from 'path'
import type Webpack from 'webpack'
import type WebpackDev from 'webpack-dev-server'
import CopyPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CspHtmlWebpackPlugin from 'csp-html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

import sveltePreprocess from 'svelte-preprocess'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

const SRC_DIR       = path.resolve(__dirname,'src')
const BUNDLE_DIR    = path.resolve(__dirname,'bundle')
const DEP_DIR       = path.resolve(__dirname,'node_modules')
const TAILWIND_DIR  = path.resolve(DEP_DIR,'@bootcamp-project','tailwind-config')
const PAGES_DIR     = path.resolve(SRC_DIR,'pages')
const SCRIPT_DIR    = path.resolve(SRC_DIR,'scripts')
const TEMPLATES_DIR = path.resolve(SRC_DIR,'templates')

const mode = process.env['NODE_ENV'] ?? 'development'
const isProduction = mode === 'production'

const DEV_CSP = {
    'script-src': [
        "'self'",
        "'unsafe-eval'"
    ],
    'style-src': ["'self'"]
}
const PROD_CSP = {
    'script-src': ["'self'"],
    'style-src': ["'self'"]
}
const CSP = isProduction ? PROD_CSP : DEV_CSP

const renderer: Configuration = {
    context:    path.resolve(__dirname),

	mode:       isProduction ? 'production' : 'development',
	devtool:    isProduction ? 'source-map' : 'eval-source-map',
	target:     'electron-renderer',

    performance: {
        hints: isProduction ? false : undefined,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },

    resolve: {
        modules: [path.join(__dirname, 'node_modules')],
        alias: { svelte: path.resolve(DEP_DIR,'svelte') },
        extensions: ['.mjs','.ts','.js','.json','.svelte'],
        mainFields: ['svelte','browser','module','main'],
        fallback: {
            util: false,
            path: false,
            fs: false,
            // assert: require.resolve('assert'),
            // buffer: require.resolve('buffer'),
            // console: require.resolve('console-browserify'),
            // constants: require.resolve('constants-browserify'),
            // crypto: require.resolve('crypto-browserify'),
            // domain: require.resolve('domain-browser'),
            // events: require.resolve('events'),
            // http: require.resolve('stream-http'),
            // https: require.resolve('https-browserify'),
            // os: require.resolve('os-browserify/browser'),
            // path: require.resolve('path-browserify'),
            // punycode: require.resolve('punycode'),
            // process: require.resolve('process/browser'),
            // querystring: require.resolve('querystring-es3'),
            // stream: require.resolve('stream-browserify'),
            // string_decoder: require.resolve('string_decoder'),
            // sys: require.resolve('util'),
            // timers: require.resolve('timers-browserify'),
            // tty: require.resolve('tty-browserify'),
            // url: require.resolve('url'),
            // util: require.resolve('util'),
            // vm: require.resolve('vm-browserify'),
            // zlib: require.resolve('browserify-zlib'),
        },
    },

    entry: {
        /* Desktop App Pages */
        renderer: path.resolve(SCRIPT_DIR,'renderer.ts'),
        index: path.resolve(PAGES_DIR,'Index.ts'),
    },

    output: { filename: '[name].js', path: BUNDLE_DIR, clean: true },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
            {
                test: /\.svelte$/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        compilerOptions: { dev: !isProduction },
                        emitCss: isProduction,
                        hotReload: !isProduction,
                        preprocess: sveltePreprocess({
                            sourceMap: !isProduction,
                            postcss: { plugins: [tailwind,autoprefixer] },
                        }),
                    }
                },
            },
            { test: /node_modules\/svelte\/.*\.mjs$/, resolve: { fullySpecified: false } },
            {
                test: /\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    { loader: "postcss-loader", options: { postcssOptions: { config: path.resolve(TAILWIND_DIR,'postcss.config.js') } } }
                ]
            }
        ]
    },

    plugins: [
        /* Application Pages */
        new HtmlWebpackPlugin({ title: 'index',  filename: 'index.html', template: path.resolve(TEMPLATES_DIR,'default.html'), chunks:['index'] }),
        /* Generate Content Security Policy Meta Tags */
        new CspHtmlWebpackPlugin(CSP),
        new MiniCssExtractPlugin({ filename: 'style.css', chunkFilename: 'style.css' }),
        new CopyPlugin({ patterns: [
            /* Copy _locales */
            { from: path.resolve('i18n'), to: path.resolve(BUNDLE_DIR,'i18n'), force: true }
        ] }),
        new ForkTsCheckerWebpackPlugin({ eslint: { files: './src/**/*.{ts,js}' } }),
    ],
    devServer: {
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 3000
    }
};

// This interface combines configuration from `webpack` and `webpack-dev-server`. You can add or override properties in this interface to change the config object type used above.
export interface Configuration extends Webpack.Configuration, WebpackDev.Configuration {}
export default renderer;
