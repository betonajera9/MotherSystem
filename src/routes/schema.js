//Rutes
import { ApolloServer, gql } from 'apollo-server-express';
import {resolvers} from './resolvers';

const typeDefs = gql`
  type Query {
    teachers: [Teacher]
    geTeacher(_id: ID): Teacher
  }

  type Teacher {
    _id: ID
    name: String!
    surnames: String!
    number: String
    school: [String]!
  }

  type Mutation {
    createTeacher(input: TeacherInput): Teacher
    updateTeacher(_id: ID!, input: TeacherInput): Teacher
    deleteTeacher(_id: ID!): Teacher
  }

  input TeacherInput {
    name: String!
    surnames: String!
    number: String
    school: [String]!
  }
`;

export default new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: `http://localhost:4000/graphql`,
    settings: {
      'editor.theme': 'dark'
    }
  }
});
