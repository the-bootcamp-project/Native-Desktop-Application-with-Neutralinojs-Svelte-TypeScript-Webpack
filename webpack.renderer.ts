import _ from 'lodash'
import { default as path } from 'path'
import type webpack from 'webpack'
import type webpackdev from 'webpack-dev-server'
import { merge } from 'webpack-merge'

import { WebpackConfig, WebpackDevelopmentConfig } from '@bootcamp-project/webpack-config'

const ROOT_DIR = path.resolve(__dirname)
const SCRIPTS_DIR = path.resolve(ROOT_DIR, 'scripts')
const DEST_DIR = path.resolve(ROOT_DIR, 'build')

const mode = process.env['NODE_ENV'] ?? 'development'
const isProduction = mode === 'production'

const Config: webpack.Configuration | webpackdev.Configuration = {
	target:     'electron-renderer',

    entry: {
        renderer: path.resolve(SCRIPTS_DIR, 'renderer.ts')
    },

    resolve: {
        extensions: ['.ts']
    },

    output: { filename: '[name].js', path: DEST_DIR },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ }
        ]
    },
}

const Output = (isProduction) ? merge(WebpackConfig, Config) : merge(WebpackDevelopmentConfig, Config)

export default Output
