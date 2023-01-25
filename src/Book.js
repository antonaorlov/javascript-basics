import React from 'react'

//props are objects placeholder destructioning props, children prop
const Book = ({ image, title, author, children }) => {
    //attribute, eventhelder
    //onCLick, onMouseOver
    const complexExample = (author) => {
      alert(author);
    };
    return (
      <article
        className="book"
        onMouseOver={() => {
          console.log(title);
        }}
      >
        <img src={image} alt="red" />
        <h1 onClickCapture={() => console.log(title)}>{title}</h1>
        <h3>{author.toUpperCase()}</h3>
        <button type="button" onClick={complexExample}></button>
        <button type="button" onClick={() => complexExample(author)}>
          complex
        </button>
      </article>
    );
  };
  

export default Book