import './FileCell.css'

export const QUERY = gql`
  query FindFileQuery($repoName: String, $filePath: String) {
    file(repoName: $repoName, filePath: $filePath)
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ file }) => {
  console.log(file)
  const text = JSON.stringify(file)
  return <div className="file">{file}</div>
}
