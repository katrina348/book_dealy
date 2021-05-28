
import React, { useState } from 'react';
import Books from './Books';
import axios from 'axios';
import BookForm from './BookForm';

const App = (props) => {
  const [books, setBooks] = useState([])
  const [showForm, setShowForm] = useState(false)

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
  
  return (
    <div>
      <h1>App.js Page</h1>
      <button onClick={getBooks}>Get Book List</button>
      <button onClick={()=> setShowForm(!showForm)}>Toggle Form</button>
      {showForm && <BookForm addBook={addBook}/>}


      <Books bookz ={books} updateBook={updateBook} />
    </div>
  )
  
}
export default App
