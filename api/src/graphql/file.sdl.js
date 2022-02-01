export const schema = gql`
  type Query {
    file(repoName: String, filePath: String): String @requireAuth
  }
`
