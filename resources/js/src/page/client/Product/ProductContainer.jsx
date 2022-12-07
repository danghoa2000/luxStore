import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { PRODUCT_API, SEARCH_API } from '../../../../constants/api';
import { CODE } from '../../../../constants/constants';
import { axiosClient } from '../../../../hooks/useHttp';
import Product from './Product';

const ProductContainer = () => {
    const [productList, setProductList] = useState([]);
    const [orderBy, setOrderBy] = useState('product_code');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searchField, setSearchFiled] = useState({});
    const [totalRecord, setTotalRecode] = useState(0);
    const [status, setStatus] = useState({});
    const [showNoti, setShowNoti] = useState(false);

    const getProductList = useCallback(() => {
        const paramater = {
            searchField: searchField,
            pageSize: rowsPerPage,
            currentPage: page,
            currentSort: orderBy,
            // currentDirection: order,
        };

        axiosClient.get(SEARCH_API, {
            params: {
                ...paramater
            },
            // headers: {
            //     'Access-Control-Allow-Origin' : '*',
            //     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            //     'credentials': true,
            // }
        }).then((response) => {
            if (response.status === CODE.HTTP_OK) {
                setProductList(response.data.products);
                setTotalRecode(response.data.total);
            }
        }).catch((response) => {
            setStatus({ type: 'error', message: response.data ? response.data.message : 'Server error' });
            setShowNoti(true)
        });
    }, [orderBy, page, rowsPerPage, searchField]);

    useEffect(() => {
        getProductList();
    }, [orderBy, page, rowsPerPage, searchField])
    return (
        <Product
        // order={order}
        orderBy={orderBy}
        page={page}
        rowsPerPage={rowsPerPage}
        setSearchFiled={setSearchFiled}
        totalRecord={totalRecord}
        productList={productList}
        />
    );
};

export default ProductContainer;