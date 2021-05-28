import React, { useState } from 'react'
import BookForm from './BookForm'
<BookForm/>

const Book = (props) =>{
  const [showForm, setShowForm] = useState(false)
  const {id, title, author, genre, neats, updateBook} = props

  return (
    <div style={{border:'3px solid', margin:'20px'}}>
      <h1>{title} <span>author: {author} neats: {neats}</span></h1>
      <button onClick={()=>setShowForm(!showForm)}>edit</button>
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