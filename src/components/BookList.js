import React from "react-dom";
import { Link, redirect } from "react-router-dom";
import DATA from "../books.json";
import "./book-list.css";
import { useState } from "react";
import { LocalStorageService } from "../services/localStorage";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

function BookList() {
  const navigate = useNavigate();
  const books = DATA.books;

  const [filterValue, setFilterValue] = useState("");
  const [filterPriceValue, setFilterPriceValue] = useState("all");

  function filterOnChange(e) {
    setFilterValue(e.target.value);
  }
  if (!LocalStorageService.get("username")) {
    return <Navigate replace to="/" />;
  } else {
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
            value={filterPriceValue}
            onChange={(e) => setFilterPriceValue(e.target.value)}
            className="filter-price-input"
          >
            <option value="all">All</option>
            <option value="<15">0 {"<"} 15</option>
            <option value="<30">15 {"<"} 30</option>
            <option value="30<">30 {"<"}</option>
          </select>
        </div>
        <div className="book-list">
          {books
            .filter((book) =>
              book.title.toLowerCase().includes(filterValue.toLowerCase())
            )
            .filter(function (book) {
              if (filterPriceValue === "all") {
                return 0 < book.price && book.price <= Number.MAX_VALUE;
              } else if (filterPriceValue === "<15") {
                return 0 < book.price && book.price <= 15;
              } else if (filterPriceValue === "<30") {
                return 15 < book.price && book.price <= 30;
              } else if (filterPriceValue === "30<") {
                return 30 < book.price && book.price <= Number.MAX_VALUE;
              }
            })
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
}

export default BookList;
