export const schema = gql`
  type Query {
    branches: [String]!
  }

  # type Mutation {
  #   createRepo(name: String!): String!
  # }
`
