import React from "react";
import '../../StyleSheets/Book.css';


const Book = ({book, selectedBookHandler}) =>{
    return(
        
            <div className="Book" onClick={()=> selectedBookHandler(book.id)}>
                <h3>Book: {book.bookName}</h3>
                <h4>writer: {book.writer}</h4>
            </div>
    )
}

export default Book;