const kv = await Deno.openKv()

const data = await kv.get(['house'])

console.log(data.value)
