import React, { useState } from "react";
import { LocalStorageService } from "../services/localStorage";
import { Navigate, useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const [cartContent, setCartContent] = useState(
    <div>
      <div>
        <img alt="cart" src={require("../media/images/cart.svg").default} />
      </div>
      <p>Cart empty...</p>
    </div>
  );
  if (LocalStorageService.get("cart")) {
    setCartContent();
  } else {
    setCartContent(
      <div>
        <div>
          <img alt="cart" src={require("../media/images/cart.svg").default} />
        </div>
        <p>Cart empty...</p>
      </div>
    );
  }

  if (!LocalStorageService.get("username")) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <main>
        <button className="navigate-btn" onClick={() => navigate("/books")}>
          ← Back to books
        </button>
        {cartContent}
      </main>
    );
  }
}
