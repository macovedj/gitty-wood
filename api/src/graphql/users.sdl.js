export const schema = gql`
  input User {
    id: String!
    name: String
    repos: [Repository]
  }

  input Repository {
    repoUrl: String
    name: String
    owners: [User]
  }

  type Query {
    users: [User!]!
    user(id: String!): User
  }

  input CreateUserInput {
    id: String
    name: String!
    repos: [Repository]!
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
