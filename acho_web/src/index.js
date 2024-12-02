import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import ProductPage from "./pages/productsPage";
import Navbar from "./components/Navbar";
import "./index.css"; // Global styles

const Root = () => {
  return (
    <Router basename="/acho">
      <div>
        <Navbar />
        <main style={{ padding: "0px 0px 0px 0px", minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
          </Routes>
        </main>
        {/* Footer visible on all pages */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
