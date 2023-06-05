const kv = await Deno.openKv()

const key = ['users']
const value = { nickname: 'yurifontella' }

const response = await kv.atomic()
  .check({ key })
  .set(key, value)
  .commit()

console.log(response)
