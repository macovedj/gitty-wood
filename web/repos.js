const got = require('got')
const fs = require('fs')

const getRepos = () => {
  got('http://64.227.20.27:8080/repos')
    .then(({ body }) => {
      const repos = JSON.parse(body)
      console.log(repos)
      fs.writeFileSync('./repos.json', body)
    })
    .catch((err) => console.log({ err }))
}

getRepos()
