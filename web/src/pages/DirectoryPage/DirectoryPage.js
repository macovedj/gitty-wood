import { Link, routes } from '@redwoodjs/router'
import DirectoryCell from 'src/components/DirectoryCell'

const DirectoryPage = ({ repoName, path }) => {
  return (
    <>
      <h1>DirectoryPage</h1>
      <DirectoryCell repoName={repoName} path={path} />
    </>
  )
}

export default DirectoryPage
