import './custom.css';
import React, { useState, useEffect} from 'react'
// import { BsFillTrashFill } from "react-icons/bs";

function BookMark() {
 const [addBookmarks, setBookmarks] = useState([]);

 useEffect(() => {
  const storeBookmarks = JSON.parse(localStorage.getItem("addBookmarks")) || [];
  setBookmarks(storeBookmarks);
 }, []);

  return (
    <div className='home'>
    <div className="container">
           {addBookmarks.map((bookmark, index) => (
            <h2 key={index}>{bookmark} </h2>
           ))} 
            {/* <span ><BsFillTrashFill className='icon'/></span> */}
         </div><br />
         
    </div>
  );
}

export default BookMark;
