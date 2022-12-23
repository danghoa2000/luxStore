import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { MANUFACTURER_API } from '../../../../../constants/api';
import { axiosClient } from '../../../../../hooks/useHttp';
import ManufacturerCreate from './ManufacturerCreate';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { CODE, STATUS } from '../../../../../constants/constants';

const ManufacturerCreateContainer = () => {

    const navigate = useNavigate();
    const [toggleDirection, setToggleDirection] = useState(false);
    const [loading, setLoading] = useState(false);
    const [t] = useTranslation();
    const [status, setStatus] = useState({});
    const [showNoti, setShowNoti] = useState(false);
    const redirectBack = () => navigate(-1);

    const validationSchema = Yup.object().shape({
        manufacturer_code: Yup.string().
            required(t('validate.required', { name: 'Manufacturer code' })),
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
                mannufacturer_code: '',
                name: '',
                telephone: '',
                address: '',
                status: STATUS.ACTIVE,
            },
            resolver: yupResolver(validationSchema),
        });

    const handleCreate = useCallback((value) => {
        setLoading(true);
        axiosClient.post(MANUFACTURER_API.CREATE, {
            ...value
        })
            .then((response) => {
                if (response.data.code === CODE.HTTP_OK) {
                    setStatus({ type: 'success', message: response.data.message });
                    reset();
                }
                setShowNoti(true)
                setLoading(false);

            }).catch(({ response }) => {
                if (response.data.code === CODE.UNPROCESSABLE_ENTITY) {
                    Object.keys(response.data.errors).forEach(element => {
                        setError(element, { type: 'custom', message: Object.values(response.data.errors[element]) })
                    });
                }
                setStatus({ type: 'error', message: response.data ? response.data.message : 'Server error' });
                setShowNoti(true)
                setLoading(false);
            });
    }, []);

    return <ManufacturerCreate
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

export default ManufacturerCreateContainer;