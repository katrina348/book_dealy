
import React, { useState } from 'react'
import Books from './Books'
import axios from 'axios'
import BookForm from './BookForm'

const App = (props) => {
  const [books, setBooks] = useState([])
  const [showForm, setShowForm] = useState(true)

  const getBooks = async () =>{
    let response = await axios.get('/books')
    console.log(response)
    setBooks(response.data)
  }

  const addBook = (book) => {
    let updateBooks = [book, ...books]
    setBooks(updateBooks)
  }

  const updateBook = (updateBook) => {
    let updateBooks = books.map(book =>{
      if(book.id !== updateBook.id){
        return book
      } else {
        return updateBook
      }
    })
    setBooks(updateBooks)
  }

  const deleteBook = (id) => {
    const filteredBooks = books.filter(book=> {
      return book.id !== id
    })
  }

  return (
    <div>
      <h1>Book List</h1>
      <button onClick={getBooks}>Get Book List</button>
      <button onClick={()=> setShowForm(!showForm)}>Toggle Form</button>
      {showForm && <BookForm addBook={addBook}/>}
      <Books bookz ={books} updateBook={updateBook} deleteBook={deleteBook}/>
    </div>
  )
}
export default App
