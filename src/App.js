import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import SpecificBook from "./components/SpecificBook";
import Signin from "./components/Signin";
import BookList from "./components/BookList";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Signin />} />
          <Route path="books" element={<BookList />} />
          <Route path="specific-book/:bookId" element={<SpecificBook />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;