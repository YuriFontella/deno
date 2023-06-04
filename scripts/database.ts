import postgres from "https://deno.land/x/postgresjs@v3.3.5/mod.js"

import { exit } from "node:process"

const sql = postgres("postgres://postgres:123456@localhost:5432/blocks")

const blocks = await sql`
  select * from groups limit 1
`

console.log(blocks)

// Deno.exit()

exit()
