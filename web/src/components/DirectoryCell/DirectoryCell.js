import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query FindDirectoryQuery($repoName: String, $path: String) {
    directory(repoName: $repoName, path: $path) {
      repoName
      path
      folderContents {
        name
        type
        sha
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ repoName, directory }) => {
  return (
    <div>
      {directory.folderContents.map((content) => (
        <div>
          <Link
            to={
              content.type === 'blob'
                ? routes.file({
                    repoName,
                    filePath: `${directory.path}/${content.name}`,
                  })
                : routes.directory({
                    repoName,
                    path: `${directory.path}/${content.name}`,
                  })
            }
          >
            {content.name}
          </Link>
        </div>
      ))}
    </div>
  )
}
