import React from 'react'

const Book = (props) =>{
  const {title, author, genre, neats} = props

  return (
    <div>
      <h1>{title} <span>author: {author} neats: {neats}</span></h1>
      <p>{genre}</p>

    </div>
  )
}

export default Book