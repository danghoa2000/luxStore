import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FORM_SEARCH_API, PRODUCT_API, SEARCH_API } from '../../../../constants/api';
import { CODE } from '../../../../constants/constants';
import { axiosClient } from '../../../../hooks/useHttp';
import { useSearchField } from '../../../../hooks/useSearchField';
import Product from './Product';

const ProductContainer = () => {
    const [productList, setProductList] = useState([]);
    const [orderBy, setOrderBy] = useState('product_code');
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(15);
    const { searchField, setSearchFiled } = useSearchField();
    const [totalRecord, setTotalRecode] = useState(0);
    const [status, setStatus] = useState({});
    const [showNoti, setShowNoti] = useState(false);
    const [formFilter, setFormFilter] = useState([]);
    const [isCompleteSetting, setComplateSetting] = useState(false);

    const getProductList = useCallback(() => {
        const paramater = {
            searchField: searchField,
            pageSize: rowsPerPage,
            currentPage: page,
            currentSort: orderBy,
            currentDirection: orderBy,
        };

        axiosClient.get(SEARCH_API, {
            params: {
                ...paramater,
                name: 'one',
            },
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

    const getFormFilter = useCallback(() => {
        setComplateSetting(false);
        const paramater = {
            searchField: searchField,
            pageSize: rowsPerPage,
            currentPage: page,
            currentSort: orderBy,
            // currentDirection: order,
        };

        axiosClient.get(FORM_SEARCH_API, {
            params: {
                ...paramater,
            },
        }).then((response) => {
            if (response.status === CODE.HTTP_OK) {
                setFormFilter(response.data.formFilter);
                setComplateSetting(true)
            }
        }).catch((response) => {
            setStatus({ type: 'error', message: response.data ? response.data.message : 'Server error' });
            setShowNoti(true)
        });
    }, []);

    useEffect(() => {
        getFormFilter();
    }, [])

    useEffect(() => {
        if (isCompleteSetting) {
            getProductList();
        }
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
            formFilter={formFilter}
            searchField={searchField}
            setPage={setPage}
        />
    );
};

export default ProductContainer;