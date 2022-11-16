import { Box, Button, FormControl, Grid, Input, InputAdornment, InputLabel, Modal, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { AccountCircle } from '@mui/icons-material';

const CreateAttributeModal = () => {
    const [t] = useTranslation();
    const validationSchema = Yup.object().shape({
        attribute: Yup.string().
            required(t('validate.required', { name: 'attribute' })),
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
                attribute: ""
            },
            resolver: yupResolver(validationSchema),
        });

    const handleCreate = useCallback((value) => {
        console.log(value);
    }, []);
    return (
        <>
            <Typography id="modal-modal-title" variant="h6" component="h2" textAlign={"center"} color="#fff">
                Create new Attribute
            </Typography>
            <form>
                <Grid container sx={{ margin: 0, padding: 1, width: '100%' }} spacing={10}>
                    <Grid item xs={12}>
                        <div className='d-inline'>
                            <Controller
                                name="attribute"
                                control={control}
                                render={({ field }) =>
                                    <FormControl variant="standard">
                                        <InputLabel htmlFor="userCode">Attribute <span className='required'></span></InputLabel>
                                        <Input
                                            {...field}
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <AccountCircle />
                                                </InputAdornment>
                                            }
                                            placeholder={t('placehoder', { name: 'Attribute' })}
                                            onBlur={(event) => {
                                                setValue(event.target.name, event.target.value ? event.target.value.trim() : '')
                                            }}
                                        />
                                    </FormControl>
                                }
                            />
                            {errors.attribute && <p className='text-danger'>{errors.attribute.message}</p>}
                        </div>
                    </Grid>
                    <Button variant="contained" className='m-1' style={{ textTransform: 'none', width: 180, maxWidth: '100%' }}
                        onClick={handleSubmit(handleCreate)}
                    >
                        Create new attribute
                    </Button>
                </Grid>
            </form>
        </>
    );
};

export default CreateAttributeModal;