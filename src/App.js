import React,{useState, useEffect} from "react"
import Quote from "./Components/Quote/Quote";
import Author from "./Components/AuthorQuote/Author"
import {Routes, Route} from "react-router-dom"
function App() {
  const [quote, setQuote] = useState([]);
 
  const quoteUrl = `https://quote-garden.herokuapp.com/api/v3/quotes`;

  // Random Quote Generator Function
  const getRandomQuote = async (url) => {
    fetch(url).then(res => res.json()).then(response => {
      const randomNumber = Math.floor(Math.random() * Number(response.data.length));
      setQuote(response.data[randomNumber])
      // console.log(response.data[randomNumber])
    })
  }

  useEffect(() => {
     getRandomQuote(quoteUrl)
  },[])


  return (
    <div className="App">
      
       <Routes>
       <Route path="/" element={<Quote quote = {quote.quoteText} id={quote._id} author={quote.quoteAuthor} type={quote.quoteGenre}/>} />
        <Route path="/author/:name" element={<Author name={quote.quoteAuthor} />} />
      </Routes>
    

    </div>
  );
}

export default App;
