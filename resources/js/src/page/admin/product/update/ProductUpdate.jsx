import { Breadcrumbs, Button, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ShowSnackbars from '../../../../../components/partial/ShowSnackbars';
import BasicInformation from '../create/BasicInformation'
import ProductType from '../create/ProductType'
import ProductImage from '../create/ProductImage'
import ProductProperty from '../create/ProductProperty'
import ProductSetting from '../create/ProductSetting'

const ProductUpdate = (props) => {
    const {
        redirectBack,
        handleUpdate,
        handleSubmit,
        control,
        reset,
        setValue,
        getValues,
        setError,
        clearErrors,
        errors,
        loading,
        showNoti,
        setStatus,
        status,
        setShowNoti,
        groupCategorytList,
        categoryList,
        manufacturerList,
        avatarRef,
        imageRef,
        productPropertyRef,
        getGroupCategory,
        groupCategoryId,
        setGroupCategoryId,
        product
    } = props;

    const [t] = useTranslation();
    return <div>
        <div className="d-flex justify-content-between align-items-center">
            <Typography variant="h4" gutterBottom>
                Product
            </Typography>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                <Link to="/admin">
                    Home
                </Link>
                <Link to="/admin/categories">
                    Product
                </Link>
                <Typography>Update</Typography>
            </Breadcrumbs>
        </div>
        <div style={{ marginBottom: 10 }}>
            <Button variant="contained" onClick={() => redirectBack()}>Back</Button>
        </div>
        <form onSubmit={handleSubmit(handleUpdate)}>
            <BasicInformation
                product={product}
                control={control}
                setValue={setValue}
                getValues={getValues}
                setError={setError}
                clearErrors={clearErrors}
                errors={errors}
                avatarRef={avatarRef}
            />
            <ProductType
                product={product}
                groupCategoryId={groupCategoryId}
                setGroupCategoryId={setGroupCategoryId}
                control={control}
                setValue={setValue}
                getValues={getValues}
                setError={setError}
                clearErrors={clearErrors}
                errors={errors}
                groupCategorytList={groupCategorytList}
                categoryList={categoryList}
                manufacturerList={manufacturerList}
                onChangeGroupCategory={() => {
                    productPropertyRef.current.removeAll()
                }}
            />
            <ProductImage
                product={product}
                control={control}
                setValue={setValue}
                getValues={getValues}
                setError={setError}
                clearErrors={clearErrors}
                errors={errors}
                imageRef={imageRef}
            />
            <ProductProperty
                product={product}
                control={control}
                setValue={setValue}
                getValues={getValues}
                setError={setError}
                clearErrors={clearErrors}
                errors={errors}
                setStatus={setStatus}
                setShowNoti={setShowNoti}
                ref={productPropertyRef}
                name="property"
                groupCategorytList={groupCategorytList}
                getGroupCategory={getGroupCategory}

            />
            <ProductSetting
                product={product}
                control={control}
                setValue={setValue}
                getValues={getValues}
                setError={setError}
                clearErrors={clearErrors}
                errors={errors}
            />

            <div className='d-flex justify-content-center w-100'>
                <Button variant="contained" type='submit' className='m-1' disabled={loading}>{loading &&
                    <CircularProgress
                        disableShrink
                        style={{ color: 'white', width: '14px', height: '14px', margin: '0 5px 0 0' }} />}
                    Update
                </Button>
                <Button variant="contained" type='reset' className='m-1 btn-cancel'
                    onClick={() => {
                        imageRef.current.removeAll();
                        avatarRef.current.removeAll();
                        productPropertyRef.current.removeAll();
                        reset();
                        setGroupCategoryId(-1)
                    }}
                >Clear</Button>
            </div>
        </form>
        {showNoti && <ShowSnackbars type={status.type} message={status.message} setShowNoti={setShowNoti} />}
    </div>
};

export default ProductUpdate;