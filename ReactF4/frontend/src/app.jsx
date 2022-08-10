import React, {useState} from "react";
import { Routes, Route } from "react-router-dom"
import "./styles/css/app.min.css";

import { Context } from "./context"
import { Layout } from "./components/layout"
import HomePage from "./pages/home"
import AboutPage from "./pages/about"
import NotFoundPage from "./pages/notfound"
import CategoryPage from "./pages/category"
import PostPage from "./pages/post_detail"


function App() {

    let [categories, setCategories] = useState()

    return (
        <Context.Provider value={{categories, setCategories}}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="category/:id" element={<CategoryPage />} />
                    <Route path="post" element={<PostPage />} />
                </Route>
            </Routes>
        </Context.Provider>
    );
}
export default App;