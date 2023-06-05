const kv = await Deno.openKv()

await kv.set(['house'], { name: 'Yuri Fontella' })

const data = await kv.get(['house'])

console.log(data.key)
console.log(data.value)

await kv.delete(['house'])

await kv.set(['people', 'homer'], { name: 'Homer Simpson' })
await kv.set(['people', 'steve'], { name: 'Steve Jobs' })

for await (const item of kv.list({ prefix: ['people'] })) {
  console.log('item', item.value)
}

await kv.delete(['people'])