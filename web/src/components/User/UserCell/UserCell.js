import User from 'src/components/User/User'

export const QUERY = gql`
  query FindUserById($id: String!) {
    user(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <User user={""} />

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ user }) => {
  return <User user={user} />
}
