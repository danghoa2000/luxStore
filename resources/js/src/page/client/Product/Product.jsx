import { Opacity } from '@mui/icons-material';
import { Box, Checkbox, Container, Divider, FormControl, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, MenuItem, Select } from '@mui/material';
import { unset } from 'lodash';
import React, { useState } from 'react';
import './product.scss';

const Product = () => {
    const [checked, setChecked] = useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    return (
        <section className='search py-5' style={{
            background: "rgb(246, 249, 252)"
        }}>
            <div className="container">
                <Box>
                    <div className='d-flex justify-content-between  bg-white' style={{ padding: "20px 30px", boxShadow: "-1px 15px 17px -8px rgb(0 0 0 / 10%);", borderRadius: 5 }}>
                        <div className="search__result">
                            <h4 className="search__result__text">
                                Searching for “ mobile phone ”
                            </h4>
                            <p className="search__result__res">
                                48 results found
                            </p>
                        </div>
                        <div className='sort'>
                            <FormControl sx={{ m: 1 }} className='flex-row align-items-center justify-content-end'>
                                <label htmlFor="" className='mr-2'>Short by:</label>
                                <Select
                                    // value={age}
                                    // onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    // style={{ padding: "10" }}
                                    className="custom__select"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </Box>
            </div>

            <div className="container mt-5 d-flex">
                <div className="addvance__search">
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader" style={{ fontWeight: "bold", padding: "10px 0", lineHeight: "22px", fontSize: "18px" }}>
                                Nested List Items
                            </ListSubheader>
                        }>
                        {[0, 1, 2, 3].map((value) => {
                            const labelId = `checkbox-list-label-${value}`;

                            return (
                                <ListItem
                                    key={value}
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="comments">
                                        </IconButton>
                                    }
                                    className='list__checkbox border-bottom-1'
                                >
                                    <ListItemText role={undefined} onClick={handleToggle(value)} dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={checked.indexOf(value) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                                    </ListItemText>
                                </ListItem>
                            );
                        })}
                    </List>
                    <Divider style={{ borderColor: "rgb(246, 249, 252)", borderBottomWidth: "medium", opacity: 1 }} />
                </div>

                <div className="product__list">
                    <div>
                        <div className='box'>
                            <div className='product m-3'>
                                <div className='img'>
                                    <span className='discount'>{5}% Off</span>
                                    <img src={"https://bonik-react.vercel.app/assets/images/products/headphone.png"} alt='' />
                                    <div className='product-like'>
                                        <label>{10}</label> <br />
                                        <i className='fa-regular fa-heart'></i>
                                    </div>
                                </div>
                                <div className='product-details'>
                                    <h3>{"Watch"}</h3>
                                    <div className='rate'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                    </div>
                                    <div className='price'>
                                        <h4>${200}.00 </h4>
                                        <button onClick={() => ({})}>
                                            <i className='fa fa-plus'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className='box'>
                            <div className='product m-3'>
                                <div className='img'>
                                    <span className='discount'>{5}% Off</span>
                                    <img src={"https://bonik-react.vercel.app/assets/images/products/headphone.png"} alt='' />
                                    <div className='product-like'>
                                        <label>{10}</label> <br />
                                        <i className='fa-regular fa-heart'></i>
                                    </div>
                                </div>
                                <div className='product-details'>
                                    <h3>{"Watch"}</h3>
                                    <div className='rate'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                    </div>
                                    <div className='price'>
                                        <h4>${200}.00 </h4>
                                        <button onClick={() => ({})}>
                                            <i className='fa fa-plus'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className='box'>
                            <div className='product m-3'>
                                <div className='img'>
                                    <span className='discount'>{5}% Off</span>
                                    <img src={"https://bonik-react.vercel.app/assets/images/products/headphone.png"} alt='' />
                                    <div className='product-like'>
                                        <label>{10}</label> <br />
                                        <i className='fa-regular fa-heart'></i>
                                    </div>
                                </div>
                                <div className='product-details'>
                                    <h3>{"Watch"}</h3>
                                    <div className='rate'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                    </div>
                                    <div className='price'>
                                        <h4>${200}.00 </h4>
                                        <button onClick={() => ({})}>
                                            <i className='fa fa-plus'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className='box'>
                            <div className='product m-3'>
                                <div className='img'>
                                    <span className='discount'>{5}% Off</span>
                                    <img src={"https://bonik-react.vercel.app/assets/images/products/headphone.png"} alt='' />
                                    <div className='product-like'>
                                        <label>{10}</label> <br />
                                        <i className='fa-regular fa-heart'></i>
                                    </div>
                                </div>
                                <div className='product-details'>
                                    <h3>{"Watch"}</h3>
                                    <div className='rate'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                    </div>
                                    <div className='price'>
                                        <h4>${200}.00 </h4>
                                        <button onClick={() => ({})}>
                                            <i className='fa fa-plus'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className='box'>
                            <div className='product m-3'>
                                <div className='img'>
                                    <span className='discount'>{5}% Off</span>
                                    <img src={"https://bonik-react.vercel.app/assets/images/products/headphone.png"} alt='' />
                                    <div className='product-like'>
                                        <label>{10}</label> <br />
                                        <i className='fa-regular fa-heart'></i>
                                    </div>
                                </div>
                                <div className='product-details'>
                                    <h3>{"Watch"}</h3>
                                    <div className='rate'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                    </div>
                                    <div className='price'>
                                        <h4>${200}.00 </h4>
                                        <button onClick={() => ({})}>
                                            <i className='fa fa-plus'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className='box'>
                            <div className='product m-3'>
                                <div className='img'>
                                    <span className='discount'>{5}% Off</span>
                                    <img src={"https://bonik-react.vercel.app/assets/images/products/headphone.png"} alt='' />
                                    <div className='product-like'>
                                        <label>{10}</label> <br />
                                        <i className='fa-regular fa-heart'></i>
                                    </div>
                                </div>
                                <div className='product-details'>
                                    <h3>{"Watch"}</h3>
                                    <div className='rate'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                    </div>
                                    <div className='price'>
                                        <h4>${200}.00 </h4>
                                        <button onClick={() => ({})}>
                                            <i className='fa fa-plus'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Product;