const { buildSchema } = require('graphql');

module.exports = buildSchema(`
input TodoInput {
    name: String
    status: String
  }

type Todo {
    id: ID!
    name: String
    status: String
  }

type Query {
    getTodo(id: ID!): Todo
    getTodoAll: Todo
  }

type Mutation {
    createTodo(input: TodoInput): Todo
    updateTodo(id: ID!, input: TodoInput): Todo
  }
`);