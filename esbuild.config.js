import { build } from 'esbuild'
import glob from 'fast-glob'
import fs from 'fs/promises'

const entryPoints = await glob('./src/**/*.ts')

const addJsExtensionPlugin = {
  name: 'add-js-extension',
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  setup(build) {
    build.onLoad({ filter: /\.ts$/ }, async(args) => {
      let contents = await fs.readFile(args.path, 'utf8')

      // Reemplaza imports relativos sin extensión con extensión .js
      contents = contents.replace(
        /from\s+['"](\.\/[^'"]+)['"]/g,
        (match, p1) => {
          if (
            !p1.endsWith('.js') &&
            !p1.endsWith('.ts') &&
            !p1.endsWith('.json')
          ) {
            return `from '${p1}.js'`
          }
          return match
        }
      )

      return {
        contents,
        loader: 'ts'
      }
    })
  }
}

await build({
  entryPoints,
  outdir: 'dist',
  platform: 'node',
  target: 'node18',
  format: 'esm',
  sourcemap: true,
  outbase: 'src',
  bundle: false,
  plugins: [addJsExtensionPlugin]
})
