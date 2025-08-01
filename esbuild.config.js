import { build } from 'esbuild'
import glob from 'fast-glob'
import fs from 'fs/promises'
import path from 'path'

const entryPoints = await glob('./src/**/*.ts')

const addJsExtensionPlugin = {
  name: 'add-js-extension',
  setup(build) {
    build.onLoad({ filter: /\.ts$/ }, async(args) => {
      let contents = await fs.readFile(args.path, 'utf8')

      // Reemplaza imports relativos sin extensión con extensión .js
      contents = contents.replace(
        /from\s+['"](\.\.?\/[^'"]+)['"]/g,
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

// Después de la compilación, corregir los archivos .d.ts
console.log('Corrigiendo archivos de declaración...')
await fixDeclarationFiles()

async function fixDeclarationFiles() {
  try {
    const dtsFiles = await glob('./dist/**/*.d.ts')

    for (const file of dtsFiles) {
      let content = await fs.readFile(file, 'utf8')

      // Reemplazar imports/exports relativos sin extensión
      content = content.replace(
        /(from\s+['"])(\.\.?\/[^'"]+)(['"])/g,
        (match, prefix, importPath, suffix) => {
          if (
            !importPath.endsWith('.js') &&
            !importPath.endsWith('.ts') &&
            !importPath.endsWith('.json')
          ) {
            return `${prefix}${importPath}.js${suffix}`
          }
          return match
        }
      )

      // También corregir exports
      content = content.replace(
        /(export\s+.*\s+from\s+['"])(\.\.?\/[^'"]+)(['"])/g,
        (match, prefix, importPath, suffix) => {
          if (
            !importPath.endsWith('.js') &&
            !importPath.endsWith('.ts') &&
            !importPath.endsWith('.json')
          ) {
            return `${prefix}${importPath}.js${suffix}`
          }
          return match
        }
      )

      await fs.writeFile(file, content, 'utf8')
    }

    console.log(`✅ Corregidos ${dtsFiles.length} archivos .d.ts`)
  } catch (error) {
    console.error('❌ Error corrigiendo archivos .d.ts:', error)
  }
}
