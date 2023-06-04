import { Application, Router } from "https://deno.land/x/oak@v12.5.0/mod.ts"

const router = new Router()

router.get('/', context => {
  context.response.body = {
    name: 'Hello Deno'
  }
})

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({ port: 3000 })
