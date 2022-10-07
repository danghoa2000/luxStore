import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d-flex justify-content-between'>
          <div className='catgrories d-flex'>
            <span class='fa-solid fa-border-all'></span>
            <h4>
              Categories
            </h4>
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to='/elite'>home</Link>
              </li>
              <li>
                <Link to='/elite/pages'>pages</Link>
              </li>
              <li>
                <Link to='/elite/user'>user account</Link>
              </li>
              <li>
                <Link to='/elite/vendor'>vendor account</Link>
              </li>
              <li>
                <Link to='/elite/track'>track my order</Link>
              </li>
              <li>
                <Link to='/elite/contact'>contact</Link>
              </li>
            </ul>

            {/* <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button> */}
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
