import{ task } from './db'
import User from "../models/user"

export const resolvers = {
    Query: {
        hello: () =>{
            return "Hello sekai"
        },
        greet(root, {name}){
            return `Hola ${name}`
        },
        tasks(){
            return task
        },
        async Users(){
            return await User.find();
        }
    },
    Mutation: {
        createTask(_, {input}){
            input._id = task.length;
            task.push(input)
            return input
        },
        async newUser(_, { input } ){
            const newUser = new User(input)
            await newUser.save()
            return newUser
        },
        async removeUser(_, {_id }){
            return await User.findById(_id)
        },
        async updUser(_, {_id, input}){
            return await User.findByIdAndUpdate(_id, input, {new: true}) 
        }
    }
};