// defining Model to store data in Database 🏳️
import mongoose from 'mongoose'

// writing Schema to express what all data will send in Database 🏳️
const bookSchema = mongoose.Schema({
    name:String,
    title:String,
    price:Number,
    category:String,
    image:String,
})

// Creating a Model of Schema 🏳️
const Book=mongoose.model("Book", bookSchema);

export default Book;