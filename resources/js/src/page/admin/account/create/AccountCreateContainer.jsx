import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ACCOUNT_API, API_BASE_URL } from '../../../../../constants/api';
import { axiosClient } from '../../../../../hooks/useHttp';
import AccountCreate from './AccountCreate';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { CODE } from '../../../../../constants/constants';

const AccountCreateContainer = () => {

    const navigate = useNavigate();
    const [toggleDirection, setToggleDirection] = useState(false);
    const [loading, setLoading] = useState(false);
    const [t] = useTranslation();
    const [status, setStatus] = useState({});
    const [showNoti, setShowNoti] = useState(false);
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
                role: ROLE.EMPlOYEE
                status: STATUS.ACTIVE,
                province_id: '',
                district_id: '',
                commune_id: '',
            },
            resolver: yupResolver(validationSchema),
        });

    const handleCreate = useCallback((value) => {
        setLoading(true);
        axiosClient.post(ACCOUNT_API.CREATE, {
            ...value
        })
            .then((response) => {
                if (response.status === CODE.HTTP_OK) {
                    setStatus({ type: 'success', message: response.data.message });
                    reset();
                }
                setShowNoti(true)
            }).catch(({ response }) => {
                if (response.status === CODE.UNPROCESSABLE_ENTITY) {
                    Object.keys(response.data.errors).forEach(element => {
                        setError(element, { type: 'custom', message: Object.values(response.data.errors[element]) })
                    });
                }
                setStatus({ type: 'error', message: response.data ? response.data.message : 'Server error' });
                setShowNoti(true)
            });
    }, []);

    return <AccountCreate
        redirectBack={redirectBack}
        handleCreate={handleCreate}
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

export default AccountCreateContainer;