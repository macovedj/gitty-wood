const fetch = require('node-fetch')

export const file = async ({ repoName, filePath }) => {
  const res = await fetch(
    `http://64.227.20.27:8080/repo/${repoName}/file/${filePath}`
  )
  const jsonRes = await res.json()
  return jsonRes.file
}
