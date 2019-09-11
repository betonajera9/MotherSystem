//Rutes
import { ApolloServer, gql } from 'apollo-server-express';
import { resolvers } from '../resolvers/resolvers';

const typeDefs = gql`
  type Query {
    getTeacher(name: String!, grade: String): [Teacher]
    getTeachers: [Teacher]

    getOrder(_id: ID!): [Order]
    getOrders: [Order]

    getPayment(_id: ID!): [Payment]
    getPayments: [Payment]

  }

  type Teacher {
    _id: ID
    name: String
    number: String
    school: [String]
    grade: [String]
    orders: [Order]
  }

  type Order {
    _id: ID
    name: String
    quantity: String
    unit_price: Float
    total_price: Float
    delevered: Boolean
    paid_out: Boolean
    payments: [Payment]
  }

  type Payment {
    _id: ID
    amount: Float
    date: String
  }

  type Mutation {
    createTeacher(input: TeacherInput): Teacher
    updateTeacher(_id: ID!, input: TeacherInput): Teacher
    deleteTeacher(_id: ID!): Teacher

    createOrder(input: OrderInput): Order
    updateOrder(_id: ID!, input: OrderInput): Order
    deleteOrder(_id: ID!): Order

    createPayment(input: PaymentInput): Payment
    updatePayment(_id: ID!, input: PaymentInput): Payment
    deletePayment(_id: ID!): Payment
  }

  input TeacherInput {
    name: String!
    number: String
    school: [String]!
    grade: [String]!
    orders: [OrderInput]
  }

  input OrderInput {
    name: String!
    quantity: String!
    unit_price: Float!
    total_price: Float!
    delevered: Boolean!
    paid_out: Boolean!
    payments: [PaymentInput]
  }

  input PaymentInput {
    amount: Float!
    date: String!
  }
`;

export default new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: `http://localhost:4000/graphql`,
    settings: {
      'editor.theme': 'dark',
    },
  },
});
