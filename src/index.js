import express from "express"
import graphqlHTTP from "express-graphql";
import schema from "./lib/schema";
import {connectDB} from "./lib/database"

const app = express()
connectDB();

const server = process.env.PORT || 4000

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));


app.listen(server, ()=>{
    console.log(`Server listening on port -> ${server} <-`)
})