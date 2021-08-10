import { Link, routes } from '@redwoodjs/router'
import RepoCell from 'src/components/RepoCell'

const RepoPage = ({ repoName }) => {
  return (
    <>
      <RepoCell name={repoName} />
    </>
  )
}

export default RepoPage
