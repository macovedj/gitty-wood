export const schema = gql`
  type User {
    id: String!
    name: String!
    repos: [String]!
  }

  type Query {
    users: [User!]!
    user(id: String!): User
  }

  input CreateUserInput {
    name: String!
    repos: [String]!
  }

  input UpdateUserInput {
    name: String
    repos: [String]!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: Int!, input: UpdateUserInput!): User!
    deleteUser(id: Int!): User!
  }
`
