import {Schema, model} from 'mongoose'

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true

    },
    last_name: {
        type: String,
        required: true
    },
    age: Number
})

export default model('User', userSchema);