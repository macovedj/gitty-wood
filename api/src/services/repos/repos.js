const fetch = require('node-fetch')

export const repos = async () => {
  const repos = await fetch('http://64.227.20.27:8080/repos')
  const body = await repos.json()
  return body.allRepoContents
}

export const repo = async ({ name }) => {
  const repo = await fetch(`http://64.227.20.27:8080/repo/${name}`)
  const body = await repo.json()
  console.log({ body })
  return { repo: name, contents: body.repoContents, branches: body.branches }
}

export const createRepo = async ({ name }) => {
  const res = await fetch(`http://64.227.20.27:8080/repos/${name}`, {
    method: 'post',
  })
  const repo = await res.json()
  return repo.repo
}
