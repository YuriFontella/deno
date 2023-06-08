import { createTRPCProxyClient, httpBatchLink } from "https://esm.sh/@trpc/client@10.29.1"

import type { AppRouter } from './router.ts'

const main = async () => {

  const client = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: 'http://localhost:8000/trpc',
      }),
    ],
  })

  const users = await client.getUsers.query()

  console.log(users)
}

main()
