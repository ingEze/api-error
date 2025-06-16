import { build } from 'esbuild'
import glob from 'fast-glob'

const entryPoints = await glob('./src/**/*.ts')

build({
  entryPoints,
  outdir: 'dist',
  platform: 'node',
  target: 'node18',
  format: 'esm',
  sourcemap: true,
  outbase: 'src'
}).catch(() => process.exit(1))
