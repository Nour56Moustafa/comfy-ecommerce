import React from "react";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import SingleProductPage from "./pages/SingleProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SingnupPage";
import CheckoutPage from "./pages/CheckoutPage";
import PrivateRoute from "./pages/PrivateRoute";
import Footer from "./component/Footer";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/products" element={<ProductPage />} />
        <Route exact path="/products/:id" element={<SingleProductPage />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/sign-up" element={<SignupPage />} />
        <Route exact path="/checkout" element={<PrivateRoute />}>
          <Route exact path="/checkout" element={<CheckoutPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
