const got = require('got')
const fs = require('fs')

const getRepos = () => {
  got('https://64.227.20.27:8443/repos')
    .then(({ body }) => {
      const repos = JSON.parse(body)
      fs.writeFileSync('./repos.json', body)
    })
    .catch((err) => console.log({ err }))
}

getRepos()
