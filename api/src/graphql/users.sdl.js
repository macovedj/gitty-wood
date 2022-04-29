export const schema = gql`
  type User {
    id: String!
    name: String!
    repos: [String]!
  }

  type Query {
    users: [User!]! @skipAuth
    user(id: String!): User @skipAuth
  }

  input CreateUserInput {
    id: String!
    name: String
    repos: [String]!
  }

  input UpdateUserInput {
    name: String
    repos: [String]!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
