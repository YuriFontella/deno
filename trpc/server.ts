import { Server } from 'https://deno.land/std@0.190.0/http/server.ts'

import { fetchRequestHandler } from "https://esm.sh/@trpc/server@10.29.1/adapters/fetch"

import { router } from './router.ts'

const server = new Server({
  port: 8000,
  handler: function (request: Request) {

    return fetchRequestHandler({
      endpoint: '/trpc',
      req: request,
      router: router,
      createContext: () => ({})
    })
  }
})

await server.listenAndServe()
