import { delay } from "https://deno.land/std@0.190.0/async/delay.ts"

const dirs = await Deno.readDirSync('.')

for await (const dir of dirs) {

  if (dir.name === 'list.txt') {
    console.log('O arquivo já existe')
    break
  }

  const encoder = new TextEncoder()
  const text = encoder.encode('Hello Deno')

  Deno.writeFileSync('list.txt', text)
}

await delay(2000)

const data = Deno.readTextFileSync('list.txt')

console.log(data)

Deno.renameSync('list.txt', 'remove.txt')

await delay(2000)

Deno.removeSync('remove.txt')