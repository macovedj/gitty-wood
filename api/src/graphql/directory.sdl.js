export const schema = gql`
  type Directory {
    repoName: String
    path: String
    folderContents: [Content]
  }

  type Content {
    type: String
    sha: String
    name: String
  }

  type Query {
    directory(repoName: String, path: String): Directory @requireAuth
  }
`
