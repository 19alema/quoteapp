import React from 'react'
import "./Quote.css";
import { Link } from "react-router-dom"
import{BsArrowRightShort} from "react-icons/bs"
function Quote({quote, author, type, id}) {
  return (
      <div className="container">
          <div className="quoteBox">
            <h3 className="quote">{quote && quote}</h3> 
              <Link to={`/author/${author && author}`}>
              <div className="author_profile">
                    <div>
                        <p>{author && author}</p>
                        <span>{type && type}</span>
                      </div>
                      
                      <BsArrowRightShort />
            </div>
              </Link>
         </div>
      </div>
  )
}

export default Quote