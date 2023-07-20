import React from "react-dom";
import { Link } from "react-router-dom";
import DATA from "../books.json";
import "./book-list.css";
import { useState } from "react";

function BookList() {
  const books = DATA.books;

  const options = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "0$ < 15$",
      value: "<15",
    },
    {
      label: "15$ < 30$",
      value: "<30",
    },
    {
      label: "30$ <",
      value: "30$<",
    },
  ];

  const [filterValue, setFilterValue] = useState("");
  const [filterPriceValue, setFilterPriceValue] = useState("all");

  function filterOnChange(e) {
    setFilterValue(e.target.value);
  }

  function handleFilterPriceChange(e) {
    setFilterPriceValue(e.target.value);
    console.log(filterPriceValue);
  }

  return (
    <main className="container">
      <div className="filter-container">
        <input
          className="filter-input"
          type="text"
          placeholder="Search by book name"
          onChange={filterOnChange}
        />
        <div className="magnifier"></div>
        <p>Price:</p>
        <select
          onChange={handleFilterPriceChange}
          className="filter-price-input"
          defaultValue="all"
        >
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <div className="book-list">
        {books
          .filter((book) =>
            book.title.toLowerCase().includes(filterValue.toLowerCase())
          )
          .map((filteredBook) => {
            return (
              <div className="book-container" key={filteredBook.id}>
                <div className="book-image-container">
                  <img
                    className="book-image"
                    src={
                      filteredBook.image ||
                      require("../media/images/imageNotFound.png")
                    }
                    alt={filteredBook.title}
                  />
                </div>
                <h3 className="book-title">
                  {filteredBook.title.length > 24
                    ? filteredBook.title.substring(0, 24) + "..."
                    : filteredBook.title}
                </h3>
                <span className="book-author">
                  Author: {filteredBook.author}
                </span>
                <div className="bottom-container">
                  <p>Price: {filteredBook.price}$</p>
                  <Link
                    className="view-link"
                    to={`/specific-book/${filteredBook.id}`}
                  >
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
