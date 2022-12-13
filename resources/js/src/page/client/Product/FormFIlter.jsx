import { Button, Divider } from '@mui/material';
import React, { useMemo } from 'react';
import { Fragment } from 'react';
import Option from './Option';
import OptionAttribute from './OptionAttribute';
import OptionGroupCategory from './OptionGroupCategory';
import OptionPrice from './OptionPrice';
import OptionRate from './OptionRate';

const FormFIlter = ({
    formFilter,
    setSearchFiled,
    searchField,
    reset,
    setValue,
    getValues,
    control,
    getProductList,
    handleSubmit }) => {
    const ADVANCE_SEARCH = useMemo(() => {
        return formFilter && Object.keys(formFilter).map((option, index) => {
            if (option == 'groupCategory') {
                return <Fragment key={index}>
                    <OptionGroupCategory
                        option={formFilter[option]}
                        setSearchFiled={setSearchFiled}
                        name="group_category_id"
                        searchField={searchField}
                        reset={reset}
                        setValue={setValue}
                        getValues={getValues}
                        getProductList={getProductList}
                        control={control}
                        handleSubmit={handleSubmit}
                    />
                    <Divider style={{ borderColor: "rgb(246, 249, 252)", borderBottomWidth: "medium", opacity: 1 }} />
                </Fragment>
            } else if (option == 'category') {
                return <Fragment key={index}>
                    <Option
                        option={formFilter[option]}
                        label="Category"
                        setSearchFiled={setSearchFiled}
                        name="category_id"
                        searchField={searchField}
                        reset={reset}
                        setValue={setValue}
                        getValues={getValues}
                        getProductList={getProductList}
                        control={control}
                        handleSubmit={handleSubmit}
                    />
                    <Divider style={{ borderColor: "rgb(246, 249, 252)", borderBottomWidth: "medium", opacity: 1 }} />
                </Fragment>
            } else if (option == 'attribute') {
                return <OptionAttribute
                    option={option}
                    setSearchFiled={setSearchFiled}
                    name="attribute"
                    searchField={searchField}
                    formFilter={formFilter}
                    key={index}
                    reset={reset}
                    setValue={setValue}
                    getValues={getValues}
                    getProductList={getProductList}
                    control={control}
                    handleSubmit={handleSubmit}
                />
            } else if (option == 'price') {
                return <Fragment key={index}>
                    {
                        <OptionPrice
                            setSearchFiled={setSearchFiled}
                            name="price"
                            searchField={searchField}
                            reset={reset}
                            setValue={setValue}
                            getValues={getValues}
                            getProductList={getProductList}
                            control={control}
                            handleSubmit={handleSubmit}
                        />
                    }
                </Fragment>
            } else if (option == 'rate') {
                return <Fragment key={index}>
                    <OptionRate
                        setSearchFiled={setSearchFiled}
                        name="rate"
                        searchField={searchField}
                        reset={reset}
                        setValue={setValue}
                        getValues={getValues}
                        getProductList={getProductList}
                        control={control}
                        handleSubmit={handleSubmit}
                    />
                    <Divider style={{ borderColor: "rgb(246, 249, 252)", borderBottomWidth: "medium", opacity: 1 }} />
                </Fragment>
            }
        })
    }, [formFilter, searchField]);

    return (
        <div className="addvance__search">
            {ADVANCE_SEARCH}
            <div className='d-flex w-100'>
                <Button variant="contained" type='submit' style={{ background: "#28a745", marginRight: 5 }} size='small'
                    onClick={handleSubmit(getProductList)}
                >
                    Apply
                </Button>
                <Button variant="contained" type='reset' className='bg-gray-100' size='small'
                    onClick={() => {
                        setValue('price_min', '');
                        setValue('group_category', '');
                        setValue('category_id', []);
                        setValue('attribute', []);
                        setValue('rate', '');
                        setValue('price_min', '');
                        setValue('price_max', '');
                        setValue('order', '1');
                        handleSubmit(getProductList);
                    }}
                >
                    Clear
                </Button>
            </div>
        </div>
    );
};

export default FormFIlter;