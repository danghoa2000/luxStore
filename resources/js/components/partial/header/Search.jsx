import { Add, AddCircle, Clear, Delete, Remove, ShoppingCart } from "@mui/icons-material";
import { Divider, Drawer, IconButton, Typography } from "@mui/material";
import { Button } from "bootstrap";
import React, { useEffect, useState } from "react"
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useSearchField } from "../../../hooks/useSearchField";

const Search = ({ CartItem }) => {
  const { searchField, setSearchFiled } = useSearchField();
  const [name, setName] = useState('');
  const [state, setState] = useState(false)
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

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };

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
        <Drawer
          anchor="right"
          open={state}
          onClose={toggleDrawer(false)}
        >
          <div style={{ width: 380 }}>
            <div style={{ margin: "0 20px", height: 74, display: "flex", alignItems: 'center' }}>
              <ShoppingCart />
              <Typography variant="h6" style={{ marginLeft: 10 }}>3 Item</Typography>
            </div>
            <Divider style={{ borderColor: "rgb(246, 249, 252)", borderBottomWidth: "medium", opacity: 1 }} />
            <div className="cart__product">
              <div className="cart__product__btn">
                <IconButton>
                  <Add />
                </IconButton>
                <Typography variant="h7">3</Typography>
                <IconButton>
                  <Remove />
                </IconButton>
              </div>
              <div className="cart__product__img">
                <img src="https://bonik-react.vercel.app/assets/images/products/Automotive/1.Ford2019.png" alt="" />
              </div>
              <div className="cart__product__detail">
                <Typography variant="h7">Lord 2019</Typography>
                <Typography variant="h7" className="cart__product__detail-price">$250.00</Typography>
              </div>
              <div className="cart__product__remove">
                <IconButton>
                  <Clear />
                </IconButton>
              </div>
            </div>
            <Divider style={{ borderColor: "rgb(246, 249, 252)", borderBottomWidth: "medium", opacity: 1 }} />
          </div>
          <Button variant="contained" className='btn__checkcout'>
            Checkout Now
          </Button>

        </Drawer>
      </section>
    </>
  )
}

export default Search
