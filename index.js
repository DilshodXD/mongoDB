// YE7AxpCDX1dhiC1q
const mongoose = require('mongoose')
const express = require('express')
const app = express()

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://UserXD:YE7AxpCDX1dhiC1q@firstdb-xd-fd.bszwbtd.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongoose succsesfuly connect"))
  .catch(err => console.log(err));

const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [ String ],
  isPublished: Boolean,
})

const Book = mongoose.model('Book', bookSchema)


async function createBook() {
  const book = new Book({
    name: 'Mukammal dasturlash',
    author: "Javlon Abdullo",
    tags: ['js', 'dasturlash', 'javascript'],
    date: {
      type: Date(),
      default: Date.now()
    },
    isPublished: true,
  })

  const savedBook = await book.save()
  // console.log(savedBook);
}

async function getBooks(){
  const book = await Book.find()
  console.log(book);
}

getBooks()