import React from 'react';
import Book from './Book';

const Books = (props) =>{

  const {bookz, updateBook} = props

  const renderComponents = () =>{
    if (bookz.length === 0){
      return<p>no books</p>
    }
    return bookz.map( book =>{
      return<Book key={book.id} {...book} updateBook={updateBook}/>
    
    })
  }
  return (
    <div>
      <h1>Book.js component</h1>
    {renderComponents()}
      
    </div>
  )
}


export default Books