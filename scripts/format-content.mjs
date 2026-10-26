// Normalise les fichiers content/**/*.md exactement comme Nuxt Studio les réécrit
// (parseMarkdown → renderMarkdown via comark), pour éviter les diffs parasites.
// Usage : node scripts/format-content.mjs [--check]
import { readFile, writeFile } from 'node:fs/promises'
import { glob } from 'node:fs/promises'
import { parseMarkdown } from 'comark'
import emoji from 'comark/plugins/emoji'
import { renderMarkdown } from 'comark/render'
import { padBlankLinesInComponents, unbindComarkTree } from '../node_modules/nuxt-studio/dist/module/runtime/utils/document/legacy.js'

const check = process.argv.includes('--check')
let changed = 0

for await (const file of glob('content/**/*.md')) {
  const source = await readFile(file, 'utf8')
  const tree = await parseMarkdown(source, {
    autoClose: false,
    autoUnwrap: true,
    linkify: false,
    plugins: [emoji()],
  })
  const output = padBlankLinesInComponents(
    await renderMarkdown(unbindComarkTree(tree), { blockAttributesStyle: 'frontmatter' }),
  ) + '\n'
  if (output !== source) {
    changed++
    console.log(`${check ? 'would change' : 'formatted'}: ${file}`)
    if (!check) await writeFile(file, output)
  }
}
console.log(`${changed} file(s) ${check ? 'differ' : 'rewritten'}`)
if (check && changed) process.exit(1)
