import { Add, AddCircle, Clear, Delete, Remove, ShoppingCart } from "@mui/icons-material";
import { Divider, Drawer, IconButton, Typography } from "@mui/material";
import { Button } from "bootstrap";
import React, { useEffect, useState } from "react"
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useSearchField } from "../../../hooks/useSearchField";

const Search = ({ CartItem, toggleDrawer }) => {
  const { searchField, setSearchFiled } = useSearchField();
  const [name, setName] = useState('');
  const navigate = useNavigate();
  // fixed Header
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const search = document.querySelector(".search")
      search.classList.toggle("active", window.scrollY > 100)
    })

  }, [])

  const handleSearch = useCallback(() => {
    if (name) {
      const newSearchField = { ...searchField };
      newSearchField['name'] = name;
      setSearchFiled(newSearchField);
    } else {
      setSearchFiled(({ name, ...newObj }) => newObj)
    }
    navigate('search');
  }, [name])

  return (
    <>
      <section className='search'>
        <div className='container d-flex align-items-center justifycontent-space-between'>
          <div className='logo width '>
            <img src={"https://bonik-react.vercel.app/assets/images/logo.svg"} alt='' />
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'
              style={{ cursor: 'pointer' }}
              onClick={handleSearch}
            ></i>
            <input
              type='text'
              placeholder='Search and hit enter...'
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={(e) => {
                setName(e.target.value ? e.target.value.trim() : '')
              }}
            />
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>
            <div className='cart'
              onClick={toggleDrawer(true)}
            >
              <i className='fa fa-shopping-bag icon-circle'></i>
              {CartItem.length === 0 ? "" : <span>{CartItem.length}</span>}

            </div>
          </div>
        </div>
       
      </section>
    </>
  )
}

export default Search
