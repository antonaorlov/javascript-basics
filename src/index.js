import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {books} from './books';
import Book from "./Book";
import { greeting } from "./testing/testing";

//always need to return
//JSX Rules
//return single element,
//div section article or fragment
// camelcase
//className instead of class
// const Greeting = () =>{
//     return  React.createElement('h1',{},'Hello')
// }


const Booklist = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return (
          <Book key={book.id} {...book}></Book> //spread
        );
      })}
    </section>
  );
};


ReactDOM.render(<Booklist />, document.getElementById("root"));
