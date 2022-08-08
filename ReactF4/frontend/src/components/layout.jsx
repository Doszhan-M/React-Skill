import React from "react";
import { Link, Outlet } from "react-router-dom"

import Header from "./header"


const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export { Layout }