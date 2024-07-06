import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolve } from './buildResolve';
import { BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { patchs, mode, isDev } = options;

  return {
    mode: mode,
    entry: patchs.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: patchs.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolve(),
    devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
    devServer: isDev && buildDevServer(options),
  };
}
