import React, { useState } from 'react'
import BookForm from './BookForm'
<BookForm/>

const Book = (props) =>{
  const [showForm, setShowForm] = useState(false)
  const {title, author, genre, neats} = props

  return (
    <div style={{border:'3px solid', margin:'20px'}}>
      <h1>{title} <span>author: {author} neats: {neats}</span></h1>
      <button onClick={()=>setShowForm(!showForm)}>edit</button>
      {showForm && <BookForm/>}
      
      <p>{genre}</p>

    </div>
  )
}

export default Book