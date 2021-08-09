import axios from 'axios'
import { useState, useEffect } from 'react'

const RepoDisplay = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    axios
      .get('http://64.227.20.27:8080/repos')
      .then(({ data }) => setRepos(data.repos))
      .catch((err) => console.log({ err }))
  })

  return (
    <div>
      {repos.map((repo) => (
        <div>{repo}</div>
      ))}
    </div>
  )
}

export default RepoDisplay
