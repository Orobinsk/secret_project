export type BuildMode = 'production' | 'development';

export interface buildPatchs {
  entry: string;
  build: string;
  html: string;
  public: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
  TMDB_KEY: string;
}

export interface BuildOptions {
  mode: BuildMode;
  patchs: buildPatchs;
  isDev: boolean;
  port: number;
}
