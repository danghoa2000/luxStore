import React, { useState } from 'react';
import SliderProduct from './SliderProduct';
import "./detail.scss"
import "../../../../components/client/MainPage/home.css"
import Sdata from '../../../../components/client/MainPage/Sdata'
import { BASE_URL } from '../../../../constants/constants';
import { Avatar, Box, Button, Checkbox, FormControl, FormControlLabel, IconButton, List, ListItem, ListItemAvatar, ListItemText, OutlinedInput, Rating, Tab, Tabs, Typography } from '@mui/material';
import TabPanel from '../../../../components/partial/tabs/TabPanel';
import { useMemo } from 'react';
import ShowSnackbars from '../../../../components/partial/ShowSnackbars';
import { formatPrice } from '../../../../utils/helper';
import { Add, Check, Remove, Star } from '@mui/icons-material';

const Detail = ({
    qty,
    setQty,
    product,
    handleChange,
    tab,
    setOption,
    option,
    handleSubmit }) => {

    const SLIDE = useMemo(() => {
        const slides = [];
        if (product?.image) {
            slides.push(product?.image)
        }
        if (product?.product_media && Object.keys(product?.product_media).length > 0) {
            const images = JSON.parse(product?.product_media.url);
            images.map(item => {
                slides.push(item)
                return item;
            })
        }
        return slides;
    }, [product])

    const QTY = useMemo(() => {
        return product?.product_detail.reduce((total, item) => total + item.qty, 0)
    }, [product])

    const SALLED = useMemo(() => {
        return product?.product_detail.reduce((total, item) => total + item.sold_qty, 0)
    }, [product])

    const customPaging = (i) => {
        return (
            <a key={i}>
                <img src={BASE_URL + SLIDE[i]} />
            </a>
        );
    }

    const OPTION = useMemo(() => {
        const items = product?.product_detail;
        if (items) {
            const data = [];
            Object.values(items).map((value) => {
                Object.values(value.property_value).map((item, index2) => {
                    if (data[item?.attribute?.name] && Object.keys(data[item?.attribute?.name]).length > 0) {
                        data[item?.attribute?.name] = { ...data[item?.attribute?.name], option: [...data[item?.attribute?.name].option, { id: item.id, value: item.attribute_value_name }] }
                    } else {
                        data[item?.attribute?.name] = { id: item.attribute_id, option: [{ id: item.id, value: item.attribute_value_name }] };
                    }

                    return item;
                })
                return value;
            });
            return data;
        }
        return null;
    }, [product])

    const FORM = useMemo(() => {
        const optionTemp = OPTION;
        if (optionTemp) {
            return Object.keys(optionTemp).map((value, index) => {
                return (
                    <div className='product__option__item' key={index}>
                        <span className='product__option__item-name' data-id={optionTemp[value].id}>{value}</span>
                        <div className='product__option__list'>
                            {
                                Object.values(optionTemp[value].option).map((opt) => (
                                    <div className={`product__option-check ${option && Object.values(option).includes(opt.id) ? 'option-checked' : ''}`} data-id={opt.id} key={opt.id}
                                        onClick={() => {
                                            const newOptions = { ...option }
                                            if (newOptions && newOptions[optionTemp[value].id] == opt.id) {
                                                delete newOptions[optionTemp[value].id];
                                                setOption(newOptions)
                                            } else {
                                                newOptions[optionTemp[value].id] = opt.id;
                                                setOption(newOptions)
                                            }
                                        }}
                                    >
                                        {opt.value}
                                        <span className='product__option-tick'>
                                            <Check className='icon__check' />
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            })
        }
        return null;
    }, [product, OPTION, option])


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
                            data={SLIDE}
                            customPaging={customPaging}
                            dotsClass={"custom-dot m-auto"}
                        />
                    </div>
                    <div className="detail__product__info" style={{ width: "50%" }}>
                        <h3 className='detail__product__info-name'>{product?.name}</h3>
                        <div style={{ display: 'flex' }}>
                            <div className='detail__product__info-rate'>
                                <span className='text-underline total__rate'>{parseFloat(product?.total_rate || 0).toFixed(1)}</span>
                                <Rating
                                    name="simple-controlled"
                                    value={product?.total_rate || 0}
                                    readOnly
                                />
                            </div>
                            <div className='detail__product__info-review'>
                                <span className='text-underline'>{product?.reviews.length}</span>
                                <span>Reviews</span>
                            </div>
                            <div className='detail__product__info-selled'>
                                <span className=''>{SALLED}</span>
                                <span>Selled</span>
                            </div>
                        </div>
                        <div className='margin-5' style={{ display: 'flex', alignItems: 'baseline', padding: "15px 20px", background: "#fafafa" }}>
                            {product?.sale_price ?
                                (
                                    <>
                                        <span className="old-price detail__product__info-price font-bold">{formatPrice(product?.price)}</span>
                                        <span className="new-price detail__product__info-price font-bold" style={{ marginLeft: 5 }}>{formatPrice(product?.sale_price)}</span>
                                        <span className="saled_price font-bold" style={{ marginLeft: 5 }}>{formatPrice(product?.sale_price)}</span>
                                    </>
                                )
                                :
                                (<span className="new-price detail__product__info-price font-bold">{formatPrice(product?.price)}</span>)
                            }
                        </div>
                        <div className='detail__product__info-brand margin-5'>
                            <span className='detail__product__info-title'>Brand</span><span className='font-bold'>{product?.category.name || 'No brand'}</span>
                        </div>
                        <div className='detail__product__info-status margin-5'><span className='detail__product__info-title'>Stock Available</span><span className='font-bold'>{QTY}</span></div>
                        <div className='product__option'>
                            {FORM}
                        </div>
                        <hr style={{ color: "#2b2b2b", width: "100%", height: "2px" }} />
                        <div className='d-flex align-items-center mb-2'>
                            <div className="cart__product__btn ">
                                <Button className='btn__remove'
                                    onClick={() => {
                                        if (qty == 1) {
                                            setQty(1)
                                        } else {
                                            setQty(pre => pre - 1)
                                        }
                                    }}
                                >
                                    <Remove />
                                </Button>
                                <FormControl>
                                    <OutlinedInput value={qty} />
                                </FormControl>
                                <Button className='btn__add'
                                    onClick={() => {
                                        if (qty < QTY) {
                                            setQty(pre => pre + 1)
                                        }
                                    }}>
                                    <Add />
                                </Button>
                            </div>
                            <Button className='btn-add-product ml-2'
                                onClick={()=>handleSubmit()}
                            >Add To Cart</Button>
                        </div>
                    </div>
                </div>
                <div className="product__description">
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs
                            value={tab}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                        >
                            <Tab className='tab__header' label={"Description"} index={0} />
                            <Tab className='tab__header' label={`Review (${product?.reviews.length})`} index={1} />
                        </Tabs>
                    </Box>
                    <TabPanel value={tab} index={0}>
                        <Typography variant="h6" component="div">
                            <span style={{ fontWeight: 'bold' }}>Specification:</span>
                            <List
                                sx={{ width: '100%', bgcolor: 'background.paper' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                            >
                                <ListItemText primary={product?.description} />
                            </List>
                        </Typography>
                    </TabPanel>
                    <TabPanel value={tab} index={1}>
                        <div className='rating__overview'>
                            <Typography variant='h5' className='rating__overview__rate'>{parseFloat(product?.total_rate || 0).toFixed(1)}/5.0</Typography>
                            <Rating
                                name="text-feedback"
                                value={product?.total_rate || 0}
                                readOnly
                                precision={0.5}
                                emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                        </div>
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            {
                                product?.reviews.length > 0 ? (
                                    product?.reviews.map((review, index) => {
                                        return (
                                            <div key={index}>
                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <Avatar >{review?.pivot?.name}</Avatar>
                                                    </ListItemAvatar>

                                                    <ListItemText
                                                        primary={<span style={{ fontWeight: 'bold' }}>{review?.pivot?.name}</span>}
                                                        secondary={
                                                            <div className='detail__product__info'>
                                                                <div className='detail__product__info-rate'>
                                                                    <Rating
                                                                        name="simple-controlled"
                                                                        className='mx-2'
                                                                        value={review?.pivot?.rate}
                                                                        readOnly
                                                                    />
                                                                    <span className='font-bold'>{review?.created_at}</span>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                </ListItem>
                                                <ListItemText
                                                    primary={review?.pivot?.content} >
                                                </ListItemText>
                                            </div>
                                        )
                                    })
                                ) : (
                                    ''
                                )
                            }

                        </List>
                    </TabPanel>
                </div>
            </div>
        </section >

    );
};

export default Detail;