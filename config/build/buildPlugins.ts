import webpack, { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CopyWebpackPlugin from 'copy-webpack-plugin';

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

    new CopyWebpackPlugin({
      patterns: [
        {
          from: patchs.public,
          to: patchs.build,
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ];

  if (isDev) {
    plugins.push(
      new webpack.ProgressPlugin(),
      new ReactRefreshWebpackPlugin(),
      new BundleAnalyzerPlugin({ openAnalyzer: false }),
    );
  }

  return plugins;
}
