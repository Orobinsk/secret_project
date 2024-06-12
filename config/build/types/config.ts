export type BuildMode = 'production' | 'development'

export interface buildPatchs {
  entry: string
  build: string
  html: string
}

export interface BuildEnv {
  mode: BuildMode
  port: number
}

export interface BuildOptions {
  mode: BuildMode
  patchs: buildPatchs
  isDev: boolean
  port: number
}
