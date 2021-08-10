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
        {contents.map((content) => (
          <div>{content.name}</div>
        ))}
      </div>
    </>
  )
}
