// Builds the hosted site in Vercel's Build Output API format: Mintlify's static
// export plus the redirects from docs.json, which the export leaves out.
import { execFileSync } from 'node:child_process'
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'

const out = '.vercel/output'
const zip = `${out}/export.zip`

rmSync(out, { recursive: true, force: true })
mkdirSync(`${out}/static`, { recursive: true })
execFileSync('npx', ['--yes', 'mint@4.2.723', 'export', '--output', zip], { stdio: 'inherit' })
execFileSync('unzip', ['-q', zip, '-d', `${out}/static`])
rmSync(zip)

// The export ships a local file server and its launchers, which a host doesn't need.
for (const file of ['serve.js', 'Start Docs.command', 'Start Docs.bat', 'LICENSE', '.gitignore', '.mintignore']) {
  rmSync(`${out}/static/${file}`, { force: true })
}

// The export is built for local preview and keeps the dev server's live-reload
// client, which polls /socket.io every five seconds and 404s on a static host.
// Short-circuit its start. The CLI fetches its client bundle at build time, so
// minified names vary; match the shape and fail if it isn't found exactly once.
const chunks = `${out}/static/_next/static/chunks`
const hook = /(\w+)\|\|\(console\.warn\("Connected to Socket\.io"\),/g
const patched = readdirSync(chunks).flatMap((file) => {
  const path = `${chunks}/${file}`
  const code = readFileSync(path, 'utf8')
  const hits = code.match(hook) ?? []
  if (hits.length) writeFileSync(path, code.replace(hook, '$1||!1&&(console.warn("Connected to Socket.io"),'))
  return hits
})
if (patched.length !== 1) throw new Error(`live-reload hook found ${patched.length} times, expected 1`)

const toRegex = (source) =>
  '^' + source.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\/:\w+\*$/, '(?:/.*)?') + '/?$'

const { redirects } = JSON.parse(readFileSync('docs.json', 'utf8'))
const routes = redirects.map(({ source, destination }) => ({
  src: toRegex(source),
  status: 308,
  headers: { Location: destination },
}))

writeFileSync(`${out}/config.json`, JSON.stringify({ version: 3, routes: [...routes, { handle: 'filesystem' }] }, null, 2))
console.log(`built ${out}: ${routes.length} redirects`)
