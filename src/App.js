import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import SpecificBook from "./components/SpecificBook";
import Signin from "./components/Signin";
import BookList from "./components/BookList";
import Layout from "./components/Layout";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BookList />} />
          <Route path="signin" element={<Signin />} />
          <Route path={`specific-book/:id`} element={<SpecificBook />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
