import React, { useEffect } from "react"
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {
  // fixed Header
  useEffect(() => {
    // window.addEventListener("scroll", function () {
    //   const search = document.querySelector(".search")
    //   search.classList.toggle("active", window.scrollY > 100)
    // })

  }, [])


  return (
    <>
      <section className='search'>
        <div className='container d-flex align-items-center justifycontent-space-between'>
          <div className='logo width '>
            <img src={"https://bonik-react.vercel.app/assets/images/logo.svg"} alt='' />
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>
            <div className='cart'>
              <Link to='/elite/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
