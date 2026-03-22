/**
 * Reads languages.json metadata files from each deployed game subfolder
 * and updates games-index.json to reflect the actual available languages.
 *
 * - Preserves the order of games in games-index.json
 * - Preserves the existing order of languages (appends new ones, removes missing ones)
 * - Does not add new games
 */

const { readFileSync, writeFileSync, existsSync } = require('node:fs')
const { join } = require('node:path')

const repoRoot = join(__dirname, '..', '..')

const gamesIndexPath = join(repoRoot, 'games-index.json')
const gamesIndex = JSON.parse(readFileSync(gamesIndexPath, 'utf-8'))

let updated = false

for (const game of gamesIndex) {
  const langFile = join(repoRoot, game.name, 'languages.json')

  if (!existsSync(langFile)) {
    console.log(`  [skip] ${game.name}: no languages.json found`)
    continue
  }

  const actualLanguages = JSON.parse(readFileSync(langFile, 'utf-8'))
  const actualSet = new Set(actualLanguages)
  const currentSet = new Set(game.languages)

  // Check if there is any difference
  if (
    actualSet.size === currentSet.size &&
    [...actualSet].every(lang => currentSet.has(lang))
  ) {
    console.log(`  [ok]   ${game.name}: languages match`)
    continue
  }

  // Keep existing order for languages that are still present, then append new ones
  const merged = game.languages.filter(lang => actualSet.has(lang))
  for (const lang of actualLanguages) {
    if (!merged.includes(lang)) {
      merged.push(lang)
    }
  }

  console.log(`  [update] ${game.name}: ${JSON.stringify(game.languages)} -> ${JSON.stringify(merged)}`)
  game.languages = merged
  updated = true
}

if (updated) {
  // Serialize with 2-space indent, then collapse "languages" arrays to single lines
  const json = JSON.stringify(gamesIndex, null, 2)
    .replace(/"languages": \[\n\s+([\s\S]*?)\n\s+\]/g, (_, items) => {
      const compact = items.replace(/\n\s+/g, '')
      return `"languages": [${compact}]`
    })
  writeFileSync(gamesIndexPath, json + '\n', 'utf-8')
  console.log('\ngames-index.json updated.')
} else {
  console.log('\nNo changes needed.')
}
