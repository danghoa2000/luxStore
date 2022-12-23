import { AccountCircle, Opacity, Star } from '@mui/icons-material';
import {
    Box,
    Checkbox,
    Divider,
    FormControl,
    Grid,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    MenuItem,
    Pagination,
    Rating,
    Select,
    Stack
} from '@mui/material';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import NotFoundResult from '../../../../components/partial/NotFoundResult';
import { formatPrice } from '../../../../utils/helper';
import FormFIlter from './FormFIlter';
import './product.scss';
import { BASE_URL } from '../../../../constants/constants';

const Product = (props) => {
    const {
        // order,
        orderBy,
        page,
        rowsPerPage,
        setSearchFiled,
        totalRecord,
        productList,
        formFilter,
        searchField,
        setPage,
        handleSubmit,
        control,
        reset,
        setValue,
        getValues,
        getProductList
    } = props;
    return (
        <section className='search py-5' style={{
            background: "rgb(246, 249, 252)"
        }}>
            <form action="">
                <div className="container">
                    <Box>
                        <div className='d-flex justify-content-between bg-white search__header'>
                            <div className="search__result">
                                <h4 className="search__result__text">
                                    Searching for “ {searchField?.name || 'All'} ”
                                </h4>
                                <p className="search__result__res">
                                    {totalRecord} results found
                                </p>
                            </div>
                            <div className='sort'>
                                <Controller
                                    name="order"
                                    control={control}
                                    render={({ field }) =>
                                        <FormControl sx={{ m: 1 }} className='flex-row align-items-center justify-content-end'>
                                            <label htmlFor="" className='mr-2'>Sort by:</label>
                                            <Select
                                                {...field}
                                                onChange={
                                                    handleSubmit(getProductList)
                                                }
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className="custom__select"
                                            >
                                                <MenuItem value={1}>Newest</MenuItem>
                                                <MenuItem value={2}>Best saller</MenuItem>
                                                <MenuItem value={3}>Price: Low to High</MenuItem>
                                                <MenuItem value={4}>Price: High to Low</MenuItem>
                                            </Select>
                                        </FormControl>
                                    }
                                />
                            </div>
                        </div>
                    </Box>
                </div >

                <div className="container mt-5 d-flex">
                    <FormFIlter
                        formFilter={formFilter}
                        setSearchFiled={setSearchFiled}
                        searchField={searchField}
                        reset={reset}
                        setValue={setValue}
                        getValues={getValues}
                        getProductList={getProductList}
                        control={control}
                        handleSubmit={handleSubmit}
                    />
                    {totalRecord !== 0 ? (
                        <div className="product__list">
                            <div style={{ width: "100%" }}>
                                {productList && Object.values(productList).map((value) => {
                                    return (
                                        <div className='product__list__item' key={value.id}>
                                            <div className='product m-3'>
                                                <div className='img'>
                                                    {value?.sale_persen ? <span className='discount'>{value?.sale_persen}% Off</span> : ""}
                                                    <img src={BASE_URL + value?.image} alt='' />
                                                    <div className='product-like'>
                                                        <label>{10}</label> <br />
                                                        <i className='fa-regular fa-heart'></i>
                                                    </div>
                                                </div>
                                                <div className='product-details'>
                                                    <h3>{value?.name}</h3>
                                                    <Rating
                                                        name="text-feedback"
                                                        value={value?.total_rate || 0}
                                                        readOnly
                                                        precision={0.5}
                                                        emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
                                                    />
                                                    <div className='price'>
                                                        <div style={{ display: 'flex', alignItems: 'baseline' }}>
                                                            {value?.sale_price ?
                                                                (
                                                                    <>
                                                                        <span className="old-price">{formatPrice(value?.min_price)}</span>
                                                                        <span className="new-price" style={{ marginLeft: 5 }}>{formatPrice(value?.sale_price)}</span>
                                                                    </>
                                                                )
                                                                :
                                                                (<span className="new-price">{formatPrice(value?.min_price)}</span>)
                                                            }
                                                        </div>
                                                        <button onClick={() => ({})}>
                                                            <i className='fa fa-plus'></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="d-flex mt-3 justify-content-end w-100">
                                <div className='pagination'>
                                    <Stack spacing={2}>
                                        <Pagination count={Math.ceil(totalRecord / rowsPerPage)} page={page} onChange={(e, value) => setPage(value)} />
                                    </Stack>
                                </div>
                            </div>
                        </div>
                    )
                        :
                        <NotFoundResult />
                    }

                </div>
            </form>
        </section >
    );
};

export default Product;