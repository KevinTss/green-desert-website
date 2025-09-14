import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

function listFiles(dir) {
  const out = []
  for (const e of readdirSync(dir)) {
    const p = join(dir, e)
    const st = statSync(p)
    if (st.isDirectory()) out.push(...listFiles(p))
    else if (/\.(ts|tsx)$/.test(e)) out.push(p)
  }
  return out
}

const locales = { en: new Set(), ar: new Set() }
for (const [lang, file] of [['en','components/i18n/en.ts'], ['ar','components/i18n/ar.ts']]) {
  const src = readFileSync(file,'utf8').split(/\r?\n/)
  for (const line of src) {
    const m = line.match(/^\s*\"([^\"]+)\":\s*/)
    if (m) locales[lang].add(m[1])
  }
}

// Find used translation keys via t("key") occurrences by scanning project files
const used = new Set()
for (const file of [...listFiles('app'), ...listFiles('components')]) {
  const txt = readFileSync(file, 'utf8')
  const re = /t\((['\"])\s*([^'\"]+)\s*\1\)/g
  let m
  while ((m = re.exec(txt)) !== null) used.add(m[2])
}

const enKeys = Array.from(locales.en).sort()
const arKeys = locales.ar

const lines = []
lines.push('# Translations Audit')
lines.push('')
lines.push('- ❌ unused: key not referenced via t("…") in app/components')
lines.push('- ❓ missing ar: key exists in EN but not in AR')
lines.push('')
for (const k of enKeys) {
  const flags = []
  if (!used.has(k)) flags.push('❌ unused')
  if (!arKeys.has(k)) flags.push('❓ missing ar')
  lines.push(`- ${k}${flags.length ? '  // ' + flags.join(', ') : ''}`)
}

writeFileSync('TRANSLATIONS_AUDIT.md', lines.join('\n'))
console.log('Wrote TRANSLATIONS_AUDIT.md with', enKeys.length, 'keys')
