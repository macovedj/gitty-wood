import { Link, routes } from '@redwoodjs/router'
import FileCell from 'src/components/FileCell'

const FilePage = ({ repoName, filePath }) => {
  return (
    <>
      <h1>FilePage</h1>
      <FileCell repoName={repoName} filePath={filePath} />
    </>
  )
}

export default FilePage
