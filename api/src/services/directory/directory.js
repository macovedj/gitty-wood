// const fetch = require('node-fetch')
import fetch from 'node-fetch'

export const directory = async ({ repoName, path }) => {
  const res = await fetch(
    `http://64.227.20.27:8080/repo/${repoName}/directory/${path}`
  )
  const jsonRes = await res.json()
  return {
    ...jsonRes,
    path: jsonRes.path.join('/'),
  }
}
