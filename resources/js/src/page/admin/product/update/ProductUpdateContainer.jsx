import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { CATEGORIES_API, GROUP_CATEGORY_API, MANUFACTURER_API, PRODUCT_API } from '../../../../../constants/api';
import { axiosClient } from '../../../../../hooks/useHttp';
import ProductUpdate from './ProductUpdate';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { CODE, STATUS } from '../../../../../constants/constants';

const ProductUpdateContainer = () => {
    const navigate = useNavigate();
    const [toggleDirection, setToggleDirection] = useState(false);
    const [loading, setLoading] = useState(false);
    const [t] = useTranslation();
    const [status, setStatus] = useState({});
    const [showNoti, setShowNoti] = useState(false);
    const [groupCategorytList, setGroupCategoryList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [manufacturerList, setManufacturerList] = useState([]);
    const [groupCategoryId, setGroupCategoryId] = useState(-1);
    const [product, setProduct] = useState();
    const [isCompleteSettingGroupCategory, setCompleteSettingGroupCategory] = useState(false);
    const [isCompleteSettingCategory, setCompleteSettingCategory] = useState(false);
    const [isCompleteSettingManufacturer, setCompleteSettingManufacturer] = useState(false);
    const { state } = useLocation();
    const avatarRef = useRef();
    const imageRef = useRef();
    const productPropertyRef = useRef();
    const categoryGroupRef = useRef();

    const redirectBack = () => navigate(-1);

    const validationSchema = Yup.object().shape({
        product_code: Yup.string().
            required(t('validate.required', { name: 'Product code' })),
        name: Yup.string().
            required(t('validate.required', { name: 'Product name' })),
        price: Yup.string().
            required(t('validate.required', { name: 'Price' })),
        group_category_id: Yup.string()
            .required(t('validate.required', { name: 'Group category' }))
            .test("isSelect", t('validate.required', { name: 'Group category' }), value => value != "-1"),
        category_id: Yup.string()
            .required(t('validate.required', { name: 'Category' }))
            .test("isSelect", t('validate.required', { name: 'Category' }), value => value != "-1"),
        manufacturer_id: Yup.string()
            .required(t('validate.required', { name: 'Manufacturer' }))
            .test("isSelect", t('validate.required', { name: 'Manufacturer' }), value => value != "-1"),
    });

    const getProduct = useCallback(() => {
        axiosClient.get(PRODUCT_API.SHOW, {
            params: {
                id: state.id
            }
        }).then((response) => {
            setProduct(response.data.product);
            if (response.data.code === CODE.HTTP_NOT_FOUND) {
                setStatus({ type: 'error', message: response.data.message });
                setShowNoti(true)
            };
        }).catch(({ response }) => {
            setStatus({ type: 'error', message: response.data ? response.data.message : 'Server error' });
            setShowNoti(true)
        });
    }, [state])

    useEffect(() => {
        getProduct();
    }, [state])

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
                avatar: '',
                product_code: '',
                name: '',
                price: '',
                status: STATUS.ACTIVE,
                group_category_id: groupCategoryId,
                category_id: -1,
                manufacturer_id: -1,
                description: '',
            },
            resolver: yupResolver(validationSchema),
        });

    const handleUpdate = useCallback((value) => {
        setLoading(true);
        axiosClient.put(PRODUCT_API.UPDATE, {
            ...value
        })
            .then((response) => {
                setShowNoti(true);
                setLoading(false);
                if (response.status === CODE.HTTP_OK) {
                     setStatus({ type: 'success', message: response.data.message });
                     setTimeout(() => {
                        navigate(-1);
                     }, 1500)
                }
            }).catch(({ response }) => {
                setShowNoti(true);
                setLoading(false);
                if (response.status === CODE.UNPROCESSABLE_ENTITY) {
                    Object.keys(response.data.errors).forEach(element => {
                        setError(element, { type: 'custom', message: Object.values(response.data.errors[element]) })
                    });
                }
                setStatus({ type: 'error', message: response.data ? response.data.message : 'Server error' });
            });
    }, []);

    const getGroupCategory = useCallback(() => {
        axiosClient.get(GROUP_CATEGORY_API.LIST)
            .then((response) => {
                setCompleteSettingGroupCategory(true);
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
            setCompleteSettingCategory(true);
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
            setCompleteSettingManufacturer(true);
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

    useEffect(() => {
        if (isCompleteSettingCategory && isCompleteSettingGroupCategory && isCompleteSettingManufacturer) {
            setValue('id', product ? product.id : '');
            setValue('product_code', product?.product_code || '');
            setValue('name', product?.name || '');
            setValue('price', product?.product_price[0]?.price || '');
            setValue('status', product?.status || -1);
            setValue('group_category_id', product?.group_category_id || -1);
            setValue('category_id', product?.category_id || -1);
            setValue('manufacturer_id', product?.manufacturer_id || -1);
            setValue('description', product?.description || '');
            setGroupCategoryId(product?.group_category_id || -1);
        }
    }, [product, isCompleteSettingCategory, isCompleteSettingGroupCategory, isCompleteSettingManufacturer]);

    return <ProductUpdate
        redirectBack={redirectBack}
        handleUpdate={handleUpdate}
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
        setStatus={setStatus}
        setShowNoti={setShowNoti}
        groupCategorytList={groupCategorytList}
        categoryList={categoryList}
        manufacturerList={manufacturerList}
        avatarRef={avatarRef}
        imageRef={imageRef}
        categoryGroupRef={categoryGroupRef}
        productPropertyRef={productPropertyRef}
        getGroupCategory={getGroupCategory}
        groupCategoryId={groupCategoryId}
        setGroupCategoryId={setGroupCategoryId}
        product={product}
    />
};

export default ProductUpdateContainer;