import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-container">
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
