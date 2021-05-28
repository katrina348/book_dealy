import axios from 'axios'
import React, { useState } from 'react'
import BookForm from './BookForm'
<BookForm/>

const Book = (props) =>{
  const [showForm, setShowForm] = useState(false)
  const {id, title, author, genre, neats, updateBook, deleteBook} = props

  const deleteHandler = async (id) => {
    let res = await axios.delete(`/books/${id}`)
    deleteBook(res.data.id)
  }

  return (
    <div style={{border:'3px solid', margin:'20px'}}>
      <h1>title: {title} <span>author: {author} neats: {neats}</span>
      <button onClick={()=>setShowForm(!showForm)}>edit</button>
      <span onClick={() => deleteHandler(id)}>delete</span>
      </h1>
      {showForm && <BookForm
                     updateBook={updateBook}
                     id={id}
                     title={title}
                     author={author}
                     genre={genre}
                     neats={neats}
                    />}
        <p>{genre}</p>
    </div>
  )
}
export default Book