import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="container">
        Виконано в{" "}
        <a
          className="link"
          href="https://prometheus.org.ua/"
          target="_blank"
          rel="noreferrer"
        >
          Prometheus
        </a>
        © 2023
      </p>
    </footer>
  );
}