import mongoose from 'mongoose'

export  async function connectDB(){
    try {
        await mongoose.connect('mongodb://localhost/mongoraphql01', {
        useNewUrlParser: true
    })
    console.log('Mongo is connect')
    } catch {
        console.log('Connect error!')
    }
}