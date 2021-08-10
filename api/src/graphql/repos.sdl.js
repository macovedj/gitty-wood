export const schema = gql`
  type Repos {
    repos: [String]
  }

  type Query {
    repos: Repos!
  }
`
