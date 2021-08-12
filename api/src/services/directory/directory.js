const fetch = require('node-fetch')

export const directory = async ({ repoName, filePath }) => {
  const res = await fetch(
    `http://64.227.20.27:8080/repo/${repoName}/directory/${filePath}`
  )
  const jsonRes = await res.json()
  return jsonRes
}
