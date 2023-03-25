import './custom.css';
import React, { useState, useEffect} from 'react'
import { BsFillTrashFill } from "react-icons/bs";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  // https://api.quotable.io
  useEffect(()=> {
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(
      (quote) => {
          setQuote(quote.content);
          setAuthor(quote.author);
          // console.log(quote);
      }
    )
  },[]);

  return (
    <div className='home'>
    <div className="container">
            <h2>{quote}</h2>
            <small>-{author}</small>
            <span ><BsFillTrashFill className='icon'/></span>
         </div><br />
         <div className="container">
            <h2>{quote}</h2>
            <small>-{author}</small>
            <span ><BsFillTrashFill className='icon'/></span>
         </div><br />
         <div className="container">
            <h2>{quote}</h2>
            <small>-{author}</small>
            <span ><BsFillTrashFill className='icon'/></span>
         </div><br />
    </div>
  );
}

export default App;
