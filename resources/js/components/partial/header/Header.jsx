import React from "react";
import "./Header.css";
import Search from "./Search";
import Navbar from "./Navbar";

const Header = ({ CartItem, toggleDrawer, setOpen, setType }) => {
    return (
        <>
            <Search
                CartItem={CartItem}
                toggleDrawer={toggleDrawer}
                setOpen={setOpen}
                setType={setType}
            />
            <Navbar />
        </>
    );
};

export default Header;
