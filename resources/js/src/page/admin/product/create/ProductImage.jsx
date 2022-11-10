import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import UploadFile from '../../../../../components/partial/UploadFile';

const ProductImage = (props) => {
    const {
        control,
        setValue,
        getValues,
        setError,
        clearErrors,
        errors,
        imageRef,
    } = props;
    const [t] = useTranslation();
    return (
        <div className="card__admin">
            <Typography variant="h5" className='cart_admin_title' gutterBottom>
                {t('product.list.table.Image')}
            </Typography>

            <Grid container sx={{ margin: 0, padding: 1, width: '100%' }} spacing={10}>
                <UploadFile
                    name={"file"}
                    multiple={true}
                    control={control}
                    setValue={setValue}
                    setError={setError}
                    clearErrors={clearErrors}
                    currentRef={imageRef}
                />
            </Grid>
        </div>
    );
};

export default ProductImage;