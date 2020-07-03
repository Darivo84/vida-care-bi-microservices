import { gql } from "apollo-server";

const typeDefs = gql`
  scalar Date

  type Note {
    description: String!
    id: ID!
    title: String!
  }

  type Appointment {
    identifier: String
    client: String
    carer: String
    startDate: String
    endDate: String
    checkInDate: String
    checkOutDate: String
    notesPublic: String
    notesPrivate: String
    cancelled: String
    cancellationReason: String
  }

  type User {
    email: String!
    id: ID!
  }

  type UserSession {
    createdAt: Date!
    expiresAt: Date!
    id: ID!
    user: User!
  }

  type Mutation {
    createNote(description: String!, title: String!): Note!
    createUser(email: String!, password: String!): User!
    createUserSession(email: String!, password: String!): UserSession!
    deleteUserSession(sessionId: ID!): Boolean!
  }

  type Query {
    notes: [Note!]!
    userSession(me: Boolean!): UserSession
    appointments(start: String!, end: String!): [Appointment!]!
  }
`;

export default typeDefs;