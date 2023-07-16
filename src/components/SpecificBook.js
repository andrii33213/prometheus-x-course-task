import { useEffect, useState } from "react";
import React from "react-dom";
import DATA from "../books.json";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./specific-book.css";

export default function SpecificBook() {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const { pathname } = useLocation();

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

  return (
    <main className="specific-book">
      <button onClick={() => navigate("/")}>Back to books</button>

      <div className="specific-book-container">
        <img
          alt={title}
          src={image || require("../media/images/imageNotFound.png")}
        />
        <div>
          <h2>{title}</h2>
          <p>
            Author: <span>{author}</span>
          </p>
          <p>
            Level: <span>{level}</span>
          </p>
          <p>
            Tags:
            {tags.map((tag) => (
              <span>{tag}</span>
            ))}
          </p>
        </div>
      </div>
      <div>
        <div>
          <span>Price, $</span>
          <span>{price}</span>
        </div>
        <div>
          <span>Count</span>
          <input type="number" value={count} onChange={handleChange} />
        </div>
        <div>
          <span>Total price</span>
          <span>{Math.round(count * price * 100) / 100}</span>
        </div>
        <input type="submit" value="Add to card" />
      </div>
      <p>{description}</p>
    </main>
  );
}
