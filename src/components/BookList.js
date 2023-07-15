import React from "react-dom";
import { Link } from "react-router-dom";
import data from "../books.json";
import SpecificBook from "./SpecificBook";

function BookList() {
  const books = data.books;
  const template = books.map((book) => {
    return (
      <div key={book.id}>
        <div>
          <img
            src={
              book.image
                ? book.image
                : require("../media/images/imageNotFound.png")
            }
            alt={book.title}
          />
        </div>
        <h3>{book.title}</h3>
        <span>{book.author}</span>
        <p>Price: {book.price}</p>
        <Link
          to={{
            pathname: `/specific-book/:id`,
            propsBook: book,
          }}
        >
          <input type="submit" value="View" />
        </Link>
      </div>
    );
  });
  return (
    <div>
      <input type="text" placeholder="Search by book name" />
      <p>Price</p>
      <input type="number" placeholder="From:" />
      <input type="number" placeholder="To:" />
      {template}
    </div>
  );
}

export default BookList;
