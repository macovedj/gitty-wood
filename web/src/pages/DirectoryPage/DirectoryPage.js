import { Link, routes } from '@redwoodjs/router'
import DirectoryCell from 'src/components/DirectoryCell'

const DirectoryPage = ({ repoName, filePath }) => {
  console.log({ repoName, filePath })
  return (
    <>
      <h1>DirectoryPage</h1>
      <DirectoryCell repoName={repoName} filePath={filePath} />
    </>
  )
}

export default DirectoryPage
