import { AccountCircle, BorderColor, Paid } from '@mui/icons-material';
import { FormControl, Grid, Input, InputAdornment, InputLabel, Typography } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import UploadFile from '../../../../../components/partial/UploadFile';

const BasicInformation = (props) => {
    const {
        control,
        setValue,
        getValues,
        setError,
        clearErrors,
        errors,
        avatarRef,
    } = props;

    const [t] = useTranslation();
    return (
        <div className="card__admin">
            <Typography variant="h5" className='cart_admin_title' gutterBottom>
                Basic information
            </Typography>
            <Grid container sx={{ margin: 0, padding: 1, width: '100%' }} spacing={10}>
                <Grid item xs={6}>
                    <Typography variant="h6" className='cart_admin_title' gutterBottom>
                        {t('product.list.table.avatar')}
                    </Typography>
                    <UploadFile
                        name={"avatar"}
                        multiple={false}
                        control={control}
                        setValue={setValue}
                        setError={setError}
                        clearErrors={clearErrors}
                        currentRef={avatarRef}
                    />

                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                    <Controller
                        name="product_code"
                        control={control}
                        render={({ field }) =>
                            <FormControl variant="standard">
                                <InputLabel htmlFor="">{t('product.list.table.product_code')}<span className='required'></span></InputLabel>
                                <Input
                                    {...field}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    }
                                    placeholder={t('placehoder', { name: t('product.list.table.product_code') })}
                                    onBlur={(event) => {
                                        setValue(event.target.id, event.target.value ? event.target.value.trim() : '')
                                    }}
                                />
                            </FormControl>}
                    />
                    {errors.product_code && <p className='text-danger'>{errors.product_code.message}</p>}

                </Grid>
                <Grid item xs={6}>
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) =>
                            <FormControl variant="standard">
                                <InputLabel htmlFor="fullName">{t('product.list.table.name')}</InputLabel>
                                <Input
                                    id="fullName"
                                    {...field}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <BorderColor />
                                        </InputAdornment>
                                    }
                                    placeholder={t('placehoder', { name: t('product.list.table.name') })}
                                    onBlur={(event) => {
                                        setValue(event.target.id, event.target.value ? event.target.value.trim() : '')
                                    }}
                                />
                            </FormControl>}
                    />
                    {errors.name && <p className='text-danger'>{errors.name.message}</p>}
                </Grid>
                <Grid item xs={6}>
                    <Controller
                        name="price"
                        control={control}
                        render={({ field }) =>
                            <FormControl variant="standard">
                                <InputLabel htmlFor="fullName">{t('product.list.table.price')}<span className='required'></span></InputLabel>
                                <Input
                                    {...field}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <Paid />
                                        </InputAdornment>
                                    }
                                    placeholder={t('placehoder', { name: t('product.list.table.price') })}
                                    onBlur={(event) => {
                                        setValue(event.target.id, event.target.value ? event.target.value.trim() : '')
                                    }}
                                />
                            </FormControl>}
                    />
                    {errors.price && <p className='text-danger'>{errors.price.message}</p>}
                </Grid>
            </Grid>
        </div>
    );
};

export default BasicInformation;