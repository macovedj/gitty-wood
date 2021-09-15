import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query FindRepoQuery($name: String!) {
    repo: repo(name: $name) {
      repo
      contents {
        type
        name
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

export const Success = ({ repo }) => {
  const repoName = repo.repo
  const contents = repo.contents
  return (
    <>
      <h1>{repoName}</h1>
      <div>
        {contents.length === 0 ? (
          <div>No commits made to repo yet</div>
        ) : (
          contents.map((content) => (
            <div>
              <Link
                to={
                  content.type === 'blob'
                    ? routes.file({ repoName, filePath: content.name })
                    : routes.directory({ repoName, path: content.name })
                }
              >
                {content.name}
              </Link>
            </div>
          ))
        )}
      </div>
    </>
  )
}
