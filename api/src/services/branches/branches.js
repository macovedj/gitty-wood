const fetch = require('node-fetch')

export const branches = async ({ repo, branch }) => {
  const branches = await fetch(`http://64.227.20.27:8080/${repo}/${branch}`)
  const body = await repos.json()
  console.log({ body })
  return body
}
