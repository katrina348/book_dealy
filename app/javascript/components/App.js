
import React, { useState } from 'react'
import Books from './Books'
import axios from 'axios'

const App = (props) => {
  const [books, setBooks] = useState([])

  const getBooks = async () =>{

    let response = await axios.get('/books')
    console.log(response)
    setBooks(response.data)
  }

  return (
    <div>
      <h1>App.js Page</h1>
      <button onClick={getBooks}>getBooks from database</button>
      {/* could render books here */}
      <Books bookz ={books} />
    </div>
  )
  
}
export default App
