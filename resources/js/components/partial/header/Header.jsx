import React from "react"
import "./Header.css"
import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ CartItem, toggleDrawer }) => {
  return (
    <>
      <Search CartItem={CartItem} toggleDrawer={toggleDrawer}/>
      <Navbar />
    </>
  )
}

export default Header
