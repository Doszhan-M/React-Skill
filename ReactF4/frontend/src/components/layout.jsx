import React from "react";
import { Outlet } from "react-router-dom"
import "../styles/css/layout.min.css";

import Header from "./header"
import Categories from "./nav"


const Layout = () => {

    return (
        <div className="root">
            <Header />
            <main>
                <aside>
                    <Categories/>
                </aside>
                <Outlet />
            </main>
        </div>
    )
}

export { Layout }