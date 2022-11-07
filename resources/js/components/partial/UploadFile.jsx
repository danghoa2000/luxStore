import { Add, ControlPointSharp, DoDisturbRounded, PhotoCamera, RemoveCircleOutline } from '@mui/icons-material';
import { FormControl, Grid, IconButton, Input, TextField, ImageList } from '@mui/material';
import { Box } from '@mui/system';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Dropzone, { useDropzone } from 'react-dropzone';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '35px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    backgroundColor: 'unset',
};

const focusedStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

const UploadFile = ({ setValue }) => {
    const [files, setFiles] = useState([]);

    const onDrop = useCallback(acceptedFiles => {
        setValue("file", acceptedFiles);
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
    }, [])


    const {
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject
    } = useDropzone({
        multiple: true,
        accept: { 'image/*': [] },
        onDrop: onDrop
    },);

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);

    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div className='image__list'>
                <img
                    src={file.preview}
                    style={img}
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
                <div className='remove__image'>
                    <RemoveCircleOutline />
                </div>
            </div>
        </div>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);

    const onChange = ()
    return (
        <Grid item xs={12}>
            <section style={thumbsContainer}>
                {thumbs}
                <div style={{ display: 'inline-block' }}>
                    <div {...getRootProps({ style, className: 'dropzone' })}>
                        <input {...getInputProps({ onChange: (e) => e.target.files[0] })} />
                        <Add />
                    </div>
                </div>
            </section>

            {/* {/ {errors.description && <p className='text-danger'>{errors.description.message}</p >} /} */}
        </Grid>
    );
};

export default UploadFile;