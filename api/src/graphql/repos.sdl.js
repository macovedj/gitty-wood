export const schema = gql`
  type Content {
    type: String!
    sha: String!
    name: String!
  }

  type Repo {
    repo: String!
    contents: [Content]
  }

  type Query {
    repos: [Repo]! @skipAuth
    repo(name: String!): Repo! @skipAuth
  }

  type Mutation {
    createRepo(name: String!): String! @skipAuth
  }
`
