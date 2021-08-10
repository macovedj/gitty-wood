import { Link, routes } from '@redwoodjs/router'
import RepoDisplay from 'src/components/RepoDisplay'
import ReposCell from 'src/components/ReposCell'

const ReposPage = () => {
  return (
    <>
      <h1>Look for Repos</h1>
      <RepoDisplay />
      <ReposCell />
    </>
  )
}

export default ReposPage
