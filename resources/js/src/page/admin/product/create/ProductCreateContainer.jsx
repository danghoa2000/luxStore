import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES_API, GROUP_CATEGORY_API, MANUFACTURER_API, PRODUCT_API } from '../../../../../constants/api';
import { axiosClient } from '../../../../../hooks/useHttp';
import ProductCreate from './ProductCreate';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { CODE, STATUS } from '../../../../../constants/constants';

const ProductCreateContainer = () => {
    const navigate = useNavigate();
    const [toggleDirection, setToggleDirection] = useState(false);
    const [loading, setLoading] = useState(false);
    const [t] = useTranslation();
    const [status, setStatus] = useState({});
    const [showNoti, setShowNoti] = useState(false);
    const [groupCategorytList, setGroupCategoryList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [manufacturerList, setManufacturerList] = useState([]);

    const avatarRef = useRef();
    const imageRef = useRef();
    const redirectBack = () => navigate(-1);

    const validationSchema = Yup.object().shape({
        product_code: Yup.string().
            required(t('validate.required', { name: 'Product code' })),
    });

    const {
        handleSubmit,
        control,
        reset,
        setValue,
        getValues,
        setError,
        clearErrors,
        formState: { errors } }
        = useForm({
            shouldUnregister: false,
            defaultValues: {
                image: '',
                product_code: '',
                name: '',
                price: '',
                status: STATUS.ACTIVE,
                group_category_id: -1,
                category_id: -1,
                manufacturer_id: -1,
                description: '',
            },
            resolver: yupResolver(validationSchema),
        });

    const handleCreate = useCallback((value) => {
        console.log(value);
        // setLoading(true);
        // axiosClient.post(PRODUCT_API.CREATE, {
        //     ...value
        // })
        //     .then((response) => {
        //         if (response.status === CODE.HTTP_OK) {
        //             setStatus({ type: 'success', message: response.data.message });
        //             reset();
        //         }
        //         setShowNoti(true);
        //         setLoading(false);
        //     }).catch(({ response }) => {
        //         if (response.status === CODE.UNPROCESSABLE_ENTITY) {
        //             Object.keys(response.data.errors).forEach(element => {
        //                 setError(element, { type: 'custom', message: Object.values(response.data.errors[element]) })
        //             });
        //         }
        //         setStatus({ type: 'error', message: response.data ? response.data.message : 'Server error' });
        //         setShowNoti(true);
        //         setLoading(false);
        //     });
    });

    const getGroupCategory = useCallback(() => {
        axiosClient.get(GROUP_CATEGORY_API.LIST)
            .then((response) => {
                if (response.status === CODE.HTTP_OK) {
                    setGroupCategoryList(response.data.groupCategories);
                }
            }).catch((response) => {
                setStatus({ type: 'error', message: response.data ? response.data.message : 'Server error' });
                setShowNoti(true)
            });
    }, [])

    const getCategoryList = useCallback(() => {
        axiosClient.get(CATEGORIES_API.LIST).then((response) => {
            if (response.status === CODE.HTTP_OK) {
                setCategoryList(response.data.categories);
            }
        }).catch((response) => {
            setStatus({ type: 'error', message: response.data ? response.data.message : 'Server error' });
            setShowNoti(true)
        });
    }, []);

    const getManufacturerList = useCallback(() => {
        axiosClient.get(MANUFACTURER_API.LIST).then((response) => {
            if (response.status === CODE.HTTP_OK) {
                setManufacturerList(response.data.manufacturers);
            }
        }).catch((response) => {
            setStatus({ type: 'error', message: response.data ? response.data.message : 'Server error' });
            setShowNoti(true)
        });
    }, []);

    useEffect(() => {
        getGroupCategory();
        getCategoryList();
        getManufacturerList();
    }, [])

    return <ProductCreate
        redirectBack={redirectBack}
        handleCreate={handleCreate}
        toggleDirection={toggleDirection}
        setToggleDirection={setToggleDirection}
        handleSubmit={handleSubmit}
        control={control}
        reset={reset}
        setValue={setValue}
        getValues={getValues}
        setError={setError}
        clearErrors={clearErrors}
        errors={errors}
        loading={loading}
        showNoti={showNoti}
        status={status}
        setShowNoti={setShowNoti}
        groupCategorytList={groupCategorytList}
        categoryList={categoryList}
        manufacturerList={manufacturerList}
        avatarRef={avatarRef}
        imageRef={imageRef}
    />
};

export default ProductCreateContainer;