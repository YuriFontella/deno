const command = new Deno.Command('ls', {
  args: ['/'],
  stdin: 'piped',
  stdout: 'piped'
})

const process = command.spawn()

await process.stdin.close()

const result = await process.output()

console.log(new TextDecoder().decode(result.stdout))
