import React from "react";
import Sidebar from "./Sidebar";
import Head from "next/head";
import Searchbar from "./Searchbar";
const Layout = ({ children }) => {
    return (
        <>
            <Sidebar />
            <main className="main-content position-relative border-radius-lg ps">
                <Searchbar/>
            { children }
            </main>
        </>
    );
};

export default Layout;
