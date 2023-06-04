// https://deno.com/manual@v1.34.1/basics/standard_library

import { Server } from 'https://deno.land/std@0.190.0/http/server.ts'

const port = 4505

const handler = (request: Request) => {
  console.log(request)

  return new Response('Hello Deno', { status: 200 })
}

const server = new Server({
  port,
  handler
})

await server.listenAndServe()

// https://deno.land/x
// deno install -qAf https://deno.land/x/denon/denon.ts
// denon run --allow-net server.ts