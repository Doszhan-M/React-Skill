import React from "react";
import { Link, Outlet } from "react-router-dom"
import "../styles/css/layout.min.css";

import Header from "./header"
import Categories from "./nav"


const Layout = () => {

    return (
        <div className="root">
            <Header />
            <main>
                <nav>
                    <Categories/>
                </nav>
                <Outlet />
            </main>
        </div>
    )
}

export { Layout }