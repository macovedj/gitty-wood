import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query ReposQuery {
    repos {
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

export const Success = ({ repos }) => {
  return (
    <ul>
      {repos &&
        repos.map(({ repo }) => (
          <div>
            <Link to={routes.repo({ repoName: repo })}>{repo}</Link>
          </div>
        ))}
    </ul>
  )
}
