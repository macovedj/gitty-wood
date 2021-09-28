export const schema = gql`
  type Content {
    type: String!
    sha: String!
    name: String!
  }

  type Repo {
    repo: String!
    contents: [Content]
    branches: [String]
  }

  type Query {
    repos: [Repo]!
    repo(name: String!): Repo!
  }

  type Mutation {
    createRepo(name: String!): String!
  }
`
