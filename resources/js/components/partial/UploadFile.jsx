import { Grid } from '@mui/material';
import React, { useRef } from 'react';
import Dropzone from './Dropzone';



const UploadFile = ({
    name,
    multiple,
    control,
    setValue,
    setError,
    clearErrors,
    currentRef,
}) => {

    return (
        <Grid item xs={12}>
            <Dropzone
                ref={currentRef}
                multiple={multiple}
                name={name}
                setValue={setValue}
                setError={setError}
                clearErrors={clearErrors}
            />
        </Grid>
    );
};

export default UploadFile;