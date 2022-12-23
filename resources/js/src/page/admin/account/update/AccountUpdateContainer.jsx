import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { ACCOUNT_API, API_BASE_URL } from '../../../../../constants/api';
import { axiosClient } from '../../../../../hooks/useHttp';
import AccountUpdate from './AccountUpdate';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { CODE, ROLE, STATUS } from '../../../../../constants/constants';
import { useEffect } from 'react';

const AccountUpdateContainer = () => {

    const navigate = useNavigate();
    const [toggleDirection, setToggleDirection] = useState(false);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({});
    const [showNoti, setShowNoti] = useState(false);
    const [account, setAccount] = useState();
    const { state } = useLocation();

    const [t] = useTranslation();
    const redirectBack = () => navigate(-1);

    const validationSchema = Yup.object().shape({
        user_code: Yup.string().
            required(t('validate.required', { name: 'User code' })),
        full_name: Yup.string()
            .required(t('validate.required', { name: 'Full name' })),
        email: Yup.string()
            .required(t('validate.required', { name: 'Email' }))
            .email(t('validate.email', { name: 'Email' })),
    });

    const getAccount = useCallback(() => {
        axiosClient.get(ACCOUNT_API.SHOW, {
            params: {
                id: state.id
            }
        }).then((response) => {
            setAccount(response.data.account);
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
        getAccount();
    }, [state])

    const {
        handleSubmit,
        control,
        reset,
        setValue,
        getValues,
        setError,
        formState: { errors } }
        = useForm({
            shouldUnregister: false,
            defaultValues: {
                user_code: '',
                full_name: '',
                email: '',
                telephone: '',
                birthday: '',
                address: '',
                direction: '',
                role: ROLE.EMPLOYEE,
                status: STATUS.ACTIVE,
                province_id: '',
                district_id: '',
                commune_id: '',
            },
            resolver: yupResolver(validationSchema),
        });

    useEffect(() => {
        setValue('id', account ? account.id : '')
        setValue('user_code', account ? account.user_code : '')
        setValue('full_name', account && account.info ? account.info.full_name : '')
        setValue('email', account && account.info ? account.info.email : '',)
        setValue('telephone', account && account.info ? account.info.telephone : '',)
        setValue('birthday', account && account.info ? account.info.birthday : '',)
        setValue('address', account && account.info ? account.info.address : '',)
        setValue('role', account ? account.role : -1,)
        setValue('status', account ? account.status : -1,)
        setValue('province_id', account && account.info ? account.info.province_id : '',)
        setValue('district_id', account && account.info ? account.info.district_id : '',)
        setValue('commune_id', account && account.info ? account.info.commune_id : '',)
    }, [account]);

    const handleUpdate = useCallback((value) => {
        setLoading(true);
        axiosClient.put(ACCOUNT_API.UPDATE, {
            ...value
        })
            .then((response) => {
                if (response.data.code === CODE.HTTP_OK) {
                    setStatus({ type: 'success', message: response.data.message });
                }
                if (response.data.code === CODE.HTTP_NOT_FOUND) {
                    setStatus({ type: 'error', message: response.data.message });
                };
                setShowNoti(true);
                setLoading(false);
            }).catch(({ response }) => {
                if (response.data.code === CODE.UNPROCESSABLE_ENTITY) {
                    Object.keys(response.data.errors).forEach(element => {
                        setError(element, { type: 'custom', message: Object.values(response.data.errors[element]) })
                    });
                }
                setStatus({ type: 'error', message: response.data.message });
                setShowNoti(true);
                setLoading(false);
            });
    }, []);

    return <AccountUpdate
        redirectBack={redirectBack}
        handleUpdate={handleUpdate}
        toggleDirection={toggleDirection}
        setToggleDirection={setToggleDirection}
        handleSubmit={handleSubmit}
        control={control}
        reset={reset}
        setValue={setValue}
        getValues={getValues}
        errors={errors}
        loading={loading}
        showNoti={showNoti}
        status={status}
        setShowNoti={setShowNoti}
    />
};

export default AccountUpdateContainer;