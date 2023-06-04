try {

  const res = await fetch("https://api.github.com/users/denoland")
  const body = await res.json()

  console.log(body)

} catch (e) {
  console.log(e)
}
