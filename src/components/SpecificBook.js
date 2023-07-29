import { useEffect, useState } from "react";
import React from "react-dom";
import DATA from "../books.json";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import "./specific-book.css";
import { LocalStorageService } from "../services/localStorage";

export default function SpecificBook() {
  const navigate = useNavigate();
  const { bookId } = useParams();

  const specificBook = DATA.books.find((book) => book.id === parseInt(bookId));

  const {
    id,
    author,
    price,
    image,
    title,
    level,
    tags,
    amount,
    shortDescription,
    description,
  } = specificBook;

  const [count, setCount] = useState(1);

  function handleChange(e) {
    if (e.target.value < 1) {
      setCount(1);
    } else if (e.target.value > amount) {
      setCount(amount);
    } else {
      setCount(e.target.value);
    }
  }

  function handleClick(e) {
    let cart = LocalStorageService.get("cart");
    let isIdRepeated = undefined;

    if (cart !== null)
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === +bookId) {
          cart[i] = { id: +bookId, count: +count };
          isIdRepeated = true;
          break;
        } else {
          isIdRepeated = false;
        }
      }
    else {
      cart = [{ id: +bookId, count: +count }];
    }

    if (isIdRepeated === false) {
      cart = [...cart, { id: +bookId, count: +count }];
    }

    LocalStorageService.set("cart", cart);
  }

  if (!LocalStorageService.get("username")) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <main className="specific-book">
        <button className="navigate-btn" onClick={() => navigate("/books")}>
          ← Back to books
        </button>

        <div className="specific-book-container">
          <div className="specific-book-image-container">
            <img
              className="specific-book-image"
              alt={title}
              src={image || require("../media/images/imageNotFound.png")}
            />
          </div>
          <div className="specific-book-info">
            <h2 className="specific-book-title">{title}</h2>
            <p>
              Author: <b>{author}</b>
            </p>
            <p>
              Level: <b>{level}</b>
            </p>
            <p>
              Tags:
              {tags.map((tag) => (
                <b> {tag} </b>
              ))}
            </p>
          </div>
          <div className="specific-book-price-form">
            <div className="specific-book-price-form-item">
              <span>Price, $</span>
              <span>{price}</span>
            </div>
            <div className="specific-book-price-form-item">
              <span>Count</span>
              <input
                className="specific-book-count-price"
                type="number"
                value={count}
                onChange={handleChange}
              />
            </div>
            <div className="specific-book-price-form-item">
              <span>Total price</span>
              <span>{Math.round(count * price * 100) / 100}</span>
            </div>
            <input
              className="add-to-cart-input"
              type="submit"
              value="Add to card"
              onClick={handleClick}
            />
          </div>
        </div>
        <div className="specific-book-description-container">
          <h3>Description</h3>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {description}
          </p>
        </div>
      </main>
    );
  }
}
