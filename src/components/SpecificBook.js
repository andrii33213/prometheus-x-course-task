import { useEffect, useState } from "react";
import React from "react-dom";

export default function SpecificBook(props) {
  console.log(props.location.propsBook);
  const [count, setCount] = useState(1);

  function handleChange(e) {
    if (e.target.value < 1) {
      setCount(1);
    } else if (e.target.value > props.book.amount) {
      setCount(props.book.amount);
    } else {
      setCount(e.target.value);
    }
  }

  return (
    <div>
      <img alt={props.book.title} src={props.book.image} />
      <div>
        <h2>{props.book.title}</h2>
        <p>
          Author: <span>{props.book.author}</span>
        </p>
        <p>
          Level: <span>{props.book.level}</span>
        </p>
        <p>
          Tags:
          {props.book.tags.map((tag) => (
            <span>{tag}</span>
          ))}
        </p>
      </div>
      <div>
        <div>
          <span>Price, $</span>
          <span>{props.book.price}</span>
        </div>
        <div>
          <span>Count</span>
          <input type="number" value={count} onChange={handleChange} />
        </div>
        <div>
          <span>Total price</span>
          <span>{Math.round(count * props.book.price * 100) / 100}</span>
        </div>
        <input type="submit" placeholder="Add to card" />
      </div>
      <p>{props.book.description}</p>
    </div>
  );
}
