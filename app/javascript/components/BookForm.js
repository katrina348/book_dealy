import React, { useState } from 'react'
import axios from 'axios'

const BookForm = (props) =>{
  const{addBook, id, updateBook} = props
  const [title, setTitle] = useState(props.title ? props.title: '')
  const [author, setAuthor] = useState(props.author ? props.author:'')
  const [genre, setGenre] = useState(props.genre ? props.genre: '')
  const [neats, setNeats] = useState(props.neats ? props.neats: '')

  const handleSubmit = async (e) =>{

    e.preventDefault()
    setErrorMesssage(null)
    console.log({title, author, genre, neats})
    const book = {title, author, genre, neats}
    
    try {
      if(id){
          let response = await axios.put(`/books/${id}`, book)
          updateBook(response.data)
      } else{
        let response = await axios.post('/books', book)
        addBook(response.data)
      }
      setTitle('')
      setAuthor('')
      setGenre('')
      setNeats('')
    } catch (err) {
        console.log(err.response.data)
        setErrorMessage(err.response.data.join(','))
    }
  }
  return(
    <div>
      <h1>{id ? "Edit": "New"}</h1>
      {errorMessage && <p style={{color:'red'}}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <p>title</p>
        <input value={title} onChange={((e)=>setTitle(e.target.value))}/>
        <p>author</p>
        <input value={author} onChange={((e)=>setAuthor(e.target.value))}/>
        <p>genre</p>
        <input value={genre} onChange={((e)=>setGenre(e.target.value))}/>
        <p>neats</p>
        <input value={neats} onChange={((e)=>setNeats(e.target.value))}/>
        <button>{id ? "Update": "Add"}</button>
        
      </form>

    </div>
  )}
export default BookForm