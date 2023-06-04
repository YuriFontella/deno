const file = await Deno.open('file.txt', { read: true })

const decoder = new TextDecoder()

for await (const chunk of file.readable) {
  const x = decoder.decode(chunk)
  console.log(x)    
}
