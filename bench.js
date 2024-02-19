import { fetch } from 'undici'

console.time('fetch')
for (let i = 0; i < 100000; i++) {
  const res = await fetch('http://localhost:3000')
  await res.text()
}
console.timeEnd('fetch')
