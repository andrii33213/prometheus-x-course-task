import React from "react-dom";
import { Link } from "react-router-dom";
import DATA from "../books.json";
import "./book-list.css";
import { useState } from "react";

function BookList() {
  const books = DATA.books;
  const [valueToFilter, setValueToFilter] = useState();
  return (
    <main className="container">
      <div className="filter-container">
        <input
          className="filter-input"
          type="text"
          placeholder="Search by book name"
        />
        <div className="magnifier"></div>
        <p>Price:</p>
        <select className="filter-price-input">
          <option value="all" key="">
            All
          </option>
          <option value="0<15$" key="">
            0${"<"}15$
          </option>
          <option value="15<30$" key="">
            15${"<"}30$
          </option>
          <option value="30-39.99$" key="">
            30${"<"}
          </option>
        </select>
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
              <h3 className="book-title">
                {book.title.length > 24
                  ? book.title.substring(0, 24) + "..."
                  : book.title}
              </h3>
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
