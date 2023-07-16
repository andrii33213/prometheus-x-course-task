import React from "react-dom";
import { Link } from "react-router-dom";
import DATA from "../books.json";
import "./book-list.css";

function BookList() {
  const books = DATA.books;
  return (
    <main className="container">
      <div className="filter-container">
        <input
          className="filter-input"
          type="text"
          placeholder="Search by book name"
        />
        <div className="filter-price-container">
          <p>Price:</p>
          <input className="filter-input" type="number" placeholder="From:" />
          <input className="filter-input" type="number" placeholder="To:" />
        </div>
      </div>
      <div className="book-list">
        {books.map((book) => {
          return (
            <div className="book-container" key={book.id}>
              <div className="book-image-container">
                <img
                  className="book-image"
                  src={
                    book.image || require("../media/images/imageNotFound.png")
                  }
                  alt={book.title}
                />
              </div>
              <h3 className="book-title">{book.title}</h3>
              <span className="book-author">Author: {book.author}</span>
              <div className="bottom-container">
                <p>Price: {book.price}$</p>
                <Link className="view-link" to={`/specific-book/${book.id}`}>
                  View
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default BookList;
