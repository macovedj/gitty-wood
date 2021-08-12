export const schema = gql`
  type Content {
    type: String
    sha: String
    name: String
  }

  type Query {
    directory(repoName: String, filePath: String): [Content]
  }
`
