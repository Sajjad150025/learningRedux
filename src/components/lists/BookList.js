import React, { Component } from "react";
import Book from "../representational/Book";
import "../../StyleSheets/Book.css";
import { Link } from "react-router-dom";

class BookList extends Component{
  render(){
    return(
      this.props.books.map((book, index)=>{
          return(
            <Link to={"/"+ book.id} key = {book.id} style={{textDecoration: 'none', color: 'black'}}>
              <Book book= {book} selectedBookHandler={this.props.selectedBookHandler} />
            </Link>   
        )
      })
    )
  }
}

export default BookList;