import { initTRPC } from "https://esm.sh/@trpc/server@10.29.1"

import { z } from "https://esm.sh/zod@3.21.4"

const trpc = initTRPC.create()

export const router = trpc.router({
  getUsers: trpc.procedure
  .output(z.array(z.object({ name: z.string() })))
  .query(() => {
    return [{ name: 'Yuri Fontella '}]
  })
})

export type AppRouter = typeof router