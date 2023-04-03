import React, { useState, useEffect} from 'react'
import './custom.css';
import { BsFillBookmarkPlusFill } from "react-icons/bs";

const Home = () => {
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

let fetchnewQuote = () => {
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(
      (quote) => {
          setQuote(quote.content);
          setAuthor(quote.author);
          // console.log(quote);
      }
    )  
}
// Add data to localStorage

const [isAddBookmark, setIsAddBookmark] = useState(false);
const handleAddBookmark = () => {
  // Add ypur favourite quote
  setIsAddBookmark(true);
}

  return (
    <div className='home'>
      <div className="container">
            <h2>{quote}</h2>
            <small>-{author}</small>
            <span ><BsFillBookmarkPlusFill className='icon' onClick={handleAddBookmark}/></span>
         </div><br />
         <button className="btn" onClick={fetchnewQuote}>Next Quote</button>
    </div>
  )
}

export default Home;


