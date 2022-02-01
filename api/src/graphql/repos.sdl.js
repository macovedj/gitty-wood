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
    repos: [Repo]! @requireAuth
    repo(name: String!): Repo! @requireAuth
  }

  type Mutation {
    createRepo(name: String!): String! @requireAuth
  }
`
