import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import SpecificBook from "./components/SpecificBook";
import Signin from "./components/Signin";
import BookList from "./components/BookList";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<BookList />} />
        <Route path="signin" element={<Signin />} />
        <Route path="specific-book/:bookId" element={<SpecificBook />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
