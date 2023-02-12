// YE7AxpCDX1dhiC1q
const mongoose = require('mongoose')
const express = require('express');
const { set } = require('express/lib/response');
const app = express()

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://UserXD:YE7AxpCDX1dhiC1q@firstdb-xd-fd.bszwbtd.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongoose succsesfuly connect"))
  .catch(err => console.log(err));

const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
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
  console.log(savedBook);
}

async function getBooks(){
  const book = await Book.find()
  console.log(book);
}


async function updateBook1(id){
  const book = await Book.findById(id)
  if (!book) {return}
  book.isPublished = true
  book.author = "Dilshod"

  book.save()
}


async function updateBook2(id){
  const result = await Book.updateMany({_id: id}, {
    $set: {
      author: "Unknow",
      isPublished: true
    }
  })
}

// updateBook2('63e42dd8507b1d836b7a8f50')


async function deleteBook1(id){
  const result = await Book.deleteOne({_id: id})
  console.log(result);
}

deleteBook1('63e42dd8507b1d836b7a8f50')


async function deleteBook2(id){
  const book = await Book.findByIdAndRemove({_id: id})
  console.log(book);
}

deleteBook2('63e42df3728071fe1eb91cc0')


















// const geoSchema = mongoose.Schema({
//   lat: String,
//   lng: String
// })

// const adresSchema = mongoose.Schema({
//   street: String,
//   suite: String,
//   city: String,
//   zipcode: String,
//   geo: geoSchema
// })

// const companySchema = mongoose.Schema({
//   name: String,
//   catchPhrase: String,
//   bs: String
// })

// const userSchema = mongoose.Schema({
//   id: Number,
//   name: String,
//   username: String,
//   email: String,
//   address: adresSchema,
//   phone: String,
//   website: String,
//   company: companySchema
// }, { collection: 'inventory' })

// const iventory = mongoose.model('inventory', userSchema)

// async function getUser() {
//   const user = await iventory.find({ adress: { street: "Kulas Light" } })
//   console.log(user);
// }

// getUser()