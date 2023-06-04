async function handleHttp(conn: Deno.Conn) {
  for await (const e of Deno.serveHttp(conn)) {
    e.respondWith(new Response('Hello Deno'))
  }
}

for await (const conn of Deno.listen({ port: 8080 })) {
  handleHttp(conn)
}