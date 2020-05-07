import express from "express"
const app = express()
const server = process.env.PORT || 4000
app.listen(server, ()=>{
    console.log(`Server listening on port -> ${server} <-`)
})
