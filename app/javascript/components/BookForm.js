import React, { useState } from 'react'
import axios from 'axios'

const BookForm = (props) =>{
  const{addBook} = props
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')
  const [neats, setNeats] = useState('')

  const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log({title, author, genre, neats})
    const book = {title, author, genre, neats}
    let response = await axios.post('/books', book)
    console.log(response)
    addBook(response.data)
    setTitle('')
    setAuthor('')
    setGenre('')
    setNeats('')

  }
  return(
    <div>
      <h1>add book</h1>
      <form onSubmit={handleSubmit}>
        <p>title</p>
        <input value={title} onChange={((e)=>setTitle(e.target.value))}/>
        <p>author</p>
        <input value={author} onChange={((e)=>setAuthor(e.target.value))}/>
        <p>genre</p>
        <input value={genre} onChange={((e)=>setGenre(e.target.value))}/>
        <p>neats</p>
        <input value={neats} onChange={((e)=>setNeats(e.target.value))}/>
        <button>add</button>
        
      </form>

    </div>
  )
}

export default BookForm