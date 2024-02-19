import Q from 'fastq'
import { fetch } from 'undici'

const q = Q.promise(async () => {
  const res = await fetch('http://localhost:3000')
  return res.body
}, 1)

q.pause()
for (let i = 0; i < 100000; i++) {
  q.push()
}
console.time('fetch')
q.resume()
await q.drained()
console.timeEnd('fetch')
