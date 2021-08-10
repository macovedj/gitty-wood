const fetch = require('node-fetch')

export const repos = async () => {
  const repos = await fetch('http://64.227.20.27:8080/repos')
  const body = await repos.json()
  console.log(body, 'fetch')
  return body
}
