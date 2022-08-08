import React from "react";
import { Routes, Route, Link } from "react-router-dom"

import HomePage from "./pages/home"
import AboutPage from "./pages/about"
import NotFoundPage from "./pages/notfound"
import {Layout} from "./components/layout"


function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

export default App;