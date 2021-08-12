import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query FindDirectoryQuery($repoName: String, $filePath: String) {
    directory(repoName: $repoName, filePath: $filePath) {
      name
      type
      sha
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ repoName, directory }) => {
  console.log({ directory, repoName })
  return (
    <div>
      {directory.map((content) => (
        <div>
          <Link
            to={
              content.type === 'blob'
                ? routes.file({ repoName, filePath: content.name })
                : routes.directory({ repoName, filePath: content.name })
            }
          >
            {content.name}
          </Link>
        </div>
      ))}
    </div>
  )
}
