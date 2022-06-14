import React, {useEffect, useState} from 'react'
import "./Author.css"
import Quote from '../Quote/Quote';
import {Link} from "react-router-dom"
import{BsArrowLeft} from "react-icons/bs"

function Author({name}) {
  const authorUrl = `https://quote-garden.herokuapp.com/api/v3/quotes?author=${name}`;
  const [author, setAuthor] = useState([])
  const [loading, setLoading] = useState(true)
  const getAuthorQuotes = async (url) => {
    fetch(url).then(res => res.json()).then(res => {
      setAuthor(res?.data)
      setLoading(false)
      })
  }

  useEffect(() => {
    getAuthorQuotes(authorUrl)
  },[])

  return (
    <div className="AuthorBox">
      <h4>{name && name}'s Quotes</h4>
      
      {loading? (<h4>Loading ...</h4>) :(  <div className="quotes">
        { 
          author?.map((author => {
            return <Quote key={Math.floor(Math.random() * 100)} quote={ author?.quoteText} />
          }))
        }
        
      </div>)}
      <Link to="/" style={{textAlign:"center", display:"flex", justifyContent:"center"}}>
        <button className="btn" style={{ textAlign: "center", display: "flex", alignItems: "center", margin: "2em", padding: ".5em 1em" }}><BsArrowLeft style={{paddingRight:"5px"}} />Back</button>
      </Link>
    </div>
  )
}

export default Author