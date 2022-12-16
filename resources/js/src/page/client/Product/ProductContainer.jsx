import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
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

    const {
        handleSubmit,
        control,
        reset,
        setValue,
        getValues,
    }
        = useForm({
            shouldUnregister: false,
            defaultValues: {
                group_category_id: '',
                category_id: '',
                attribute: [],
                rate: '',
                price_min: '',
                price_max: '',
                order: '1'
            },
        });

    const getProductList = (value) => {
        const paramater = {
            searchField: value,
            pageSize: rowsPerPage,
            currentPage: page,
            currentSort: orderBy,
            currentDirection: orderBy,
        };

        axiosClient.get(SEARCH_API, {
            params: {
                searchField: { ...value },
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
    };

    const getFormFilter = useCallback(() => {
        setComplateSetting(false);
        axiosClient.get(FORM_SEARCH_API).then((response) => {
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
    }, [orderBy, page, rowsPerPage, isCompleteSetting])


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
            setPage={setPage}
            handleSubmit={handleSubmit}
            control={control}
            reset={reset}
            setValue={setValue}
            getValues={getValues}
            getProductList={getProductList}
        />
    );
};

export default ProductContainer;