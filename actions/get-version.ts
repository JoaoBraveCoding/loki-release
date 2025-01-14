import { readFileSync } from 'fs'
const release = JSON.parse(readFileSync('./release.json', 'utf8'))

const version = release[0]?.title?.version

if (!version) {
  process.exit(1)
}

const versionParts = [version.major, version.minor, version.patch]
if (version.preRelease && version.preRelease !== '') {
  versionParts.push(version.preRelease)
}

console.log(versionParts.join('.'))
