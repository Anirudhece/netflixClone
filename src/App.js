import "./styles.scss";
import Home from "./component/Component--Home/Home";
import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
export default function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  );
}
