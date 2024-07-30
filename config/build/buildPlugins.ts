import webpack, { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'Html-Webpack-Plugin';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export function buildPlugins({ mode, patchs }: BuildOptions): Configuration['plugins'] {
  const isDev = mode === 'development';

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: patchs.html,
    }),

    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),

    new webpack.DefinePlugin({
      'process.env.TMDB_KEY': JSON.stringify(process.env.TMDB_KEY),
    }),
  ];

  if (isDev) {
    plugins.push(
      new webpack.ProgressPlugin(),
      //проверка типов отдельным процессом
      new ForkTsCheckerWebpackPlugin(),
      new ReactRefreshWebpackPlugin(),
    );
  }

  return plugins;
}
