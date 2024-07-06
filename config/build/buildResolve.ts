import { ResolveOptions } from 'webpack';

export function buildResolve(): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  };
}
