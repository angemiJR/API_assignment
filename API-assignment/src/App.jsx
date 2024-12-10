import { BrowserRouter, Routes, Route } from "react-router-dom";
import Images from "./assets/Images.jsx";
import Videos from "./assets/Videos.jsx";
import Maps from "./assets/Maps.jsx";
import News from "./assets/News.jsx";
import Product from "./assets/Product.jsx";
import Home from "./assets/Home.jsx";
import Navbar from "./assets/components/Navbar.jsx";
import React from "react";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/images" element={<Images />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/maps" element={<Maps />} />
                <Route path="/news" element={<News />} />
                <Route path="/product" element={<Product />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
