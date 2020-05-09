import { makeExecutableSchema } from "graphql-tools";
import {resolvers} from "./resolvers"

const typeDef = `
    type Query {
        hello: String
        greet(name: String!): String
        tasks: [Task]
        Users: [User]
    }
    type Mutation{
        createTask(input: TaskInput): Task
        newUser(input: UserInput): User
        removeUser(_id: ID): User
        updUser(_id: ID, input: UserInput): User
    }

    type Task {
        _id: ID
        title: String
        descripcion: String
        val: Int 
    }

    type User{
        _id: ID
        first_name: String!
        last_name: String!
        age: Int
    }

    input TaskInput{
        title: String!
        descripcion: String!
        val: Int 
    }
    
    input UserInput{
        first_name: String!
        last_name: String! 
        age: Int
    }


`;

export default makeExecutableSchema({
    typeDefs: typeDef,
    resolvers: resolvers
})