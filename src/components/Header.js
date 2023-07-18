import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import cartImage from "../media/images/cart.svg";
import "./header.css";
import { LS_KEYS, LocalStorageService } from "../services/localStorage";

export default function Header() {
  return (
    <header className="header">
      <h1 className="brand">JS BRAND STORE / Andrii Dubinko</h1>
      {LocalStorageService.get("loggedIn") ? (
        <div className="right-container">
          <Link className="cart" to="/cart">
            <img
              className="cart-image"
              alt="Cart"
              src={require("../media/images/cart.svg").default}
            />
          </Link>
          <button className="btn">
            <Link to="/">Sign in</Link>
          </button>
          <div className="user">
            <img
              className="avatar-image"
              src={require("../media/images/avatar.png")}
              alt="Avatar"
            />
            <p className="username">{LocalStorageService.get("username")}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
}
