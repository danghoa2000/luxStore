import React from "react";
import "./Header.css";
import Search from "./Search";
import Navbar from "./Navbar";

const Header = ({ CartItem, toggleDrawer, setOpen, setType, setCartItem }) => {
    return (
        <>
            <Search
                CartItem={CartItem}
                toggleDrawer={toggleDrawer}
                setOpen={setOpen}
                setType={setType}
                setCartItem={setCartItem}
            />
            <Navbar />
        </>
    );
};

export default Header;
