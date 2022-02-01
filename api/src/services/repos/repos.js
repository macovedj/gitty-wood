// const fetch = require('node-fetch')
import fetch from 'node-fetch'

export const repos = async () => {
  const repos = await fetch('http://64.227.20.27:8080/repos')
  const body = await repos.json()
  return body.allRepoContents
}

export const repo = async ({ name }) => {
  const repo = await fetch(`http://64.227.20.27:8080/repo/${name}`)
  const body = await repo.json()
  return { repo: name, contents: body.repoContents }
}

// export const createRepo = async ({ name }) => {
//   const res = await fetch(`http://64.227.20.27:8080/repos/${name}`, {
//     method: 'post',
//   })
//   const repo = await res.json()
//   return repo.repo
// }
