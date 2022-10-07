import React, { useState } from 'react';
import SliderProduct from './SliderProduct';
import "./detail.scss"
import "../../../../components/client/MainPage/home.css"
import Sdata from '../../../../components/client/MainPage/Sdata'
import { BASE_URL } from '../../../../constants/constants';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Rating, Tab, Tabs, Typography } from '@mui/material';
import TabPanel from '../../../../components/partial/tabs/TabPanel';

const Detail = ({ qty, setQty }) => {
    const [rate, setRate] = useState(4);

    const customPaging = (i) => {
        return (
            <a key={i}>
                <img src={BASE_URL + Sdata[i].cover} />
            </a>
        );
    }

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
    };

    return (
        <section className='detail py-5'>
            <div className="container">
                <div className="detail__product">
                    <div className="detail__product__slide" style={{ width: "50%" }}>
                        <SliderProduct
                            slideClass={"homeSlide"}
                            dots={true}
                            slidesToShow={1}
                            slidesToScroll={1}
                            autoplay={true}
                            data={Sdata}
                            customPaging={customPaging}
                            dotsClass={"custom-dot m-auto"}
                        />
                    </div>
                    <div className="detail__product__info" style={{ width: "50%" }}>
                        <h3 className='detail__product__info-name'>Mi Note 11 Pro</h3>
                        <div className='detail__product__info-brand'>
                            Brand: <span className='font-bold'>Ziaomi</span>
                        </div>
                        <div className='detail__product__info-rate'>
                            Rated:
                            <Rating
                                name="simple-controlled"
                                value={rate}
                                readOnly
                            />
                            <span className='font-bold'>(50)</span>
                        </div>
                        <p className='detail__product__info-price font-bold'>$1135.00</p>
                        <p className='detail__product__info-status'>Stock Available</p>
                        <hr style={{ color: "#2b2b2b", width: "100%", height: "2px" }} />
                        <div className='d-flex align-items-center mb-2'>
                            <label htmlFor="" className='mr-2'>Qty:</label>
                            <input type="number" className='product__qty'
                                value={qty}
                                onInput={(e) => setQty(e.currentTarget.value)}
                                onChange={(e) => {
                                    let result = e.target.value.replace(/\D/g, '');
                                    if (!result) result = 1
                                    setQty(result);
                                }}
                                onPaste={(e) => e.preventDefault()}
                            />
                            <button type='button' className='btn-add-product ml-2'>Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="product__description">
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                        >
                            <Tab className='tab__header' label={"Description"} index={0} />
                            <Tab className='tab__header' label={`Review ${"2"}`} index={1} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <Typography variant="h6" component="div">
                            <h3 style={{ fontWeight: 'bold' }}>Specification:</h3>
                            <List
                                sx={{ width: '100%', bgcolor: 'background.paper' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                            >
                                <ListItemText primary="Sent mail" />
                            </List>
                        </Typography>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src='https://bonik-react.vercel.app/assets/images/products/headphone.png'></Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<span style={{ fontWeight: 'bold' }}>Jannie Schumm</span>}
                                    secondary={
                                        <div className='detail__product__info'>
                                            <div className='detail__product__info-rate'>
                                                Rated:
                                                <Rating
                                                    name="simple-controlled"
                                                    className='mx-2'
                                                    value={rate}
                                                    readOnly
                                                />
                                                <span className='font-bold'>1.7 years ago</span>
                                            </div>
                                        </div>
                                    }
                                />
                            </ListItem>
                            <ListItemText
                                primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account." >
                            </ListItemText>
                        </List>
                    </TabPanel>
                </div>
            </div>
        </section >
    );
};

export default Detail;