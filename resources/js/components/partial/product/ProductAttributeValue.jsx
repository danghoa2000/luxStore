import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

const ProductAttributeValue = ({
    topFilms,
    attributeValue,
    setAttributeValue,
    attributeValueList,
    handleUpdateAttributeValue
}) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const loading = open && options.length === 0;
    const [inputValue, setInputValue] = React.useState('')
    // useEffect(() => {
    //     let active = true;

    //     if (!loading) {
    //         return undefined;
    //     }

    //     (async () => {
    //         await sleep(1e3); // For demo purposes.

    //         if (active) {
    //             setOptions([...attributeValueList]);
    //         }
    //     })();

    //     return () => {
    //         active = false;
    //     };
    // }, [loading]);


    return (
        <Autocomplete
            sx={{ width: 170 }}
            name="attributeValue"
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            // defaultValue={attributeValue}
            // value={attributeValue || null}
            onChange={(event, value) => handleUpdateAttributeValue(value)}
            getOptionLabel={(option) => option.name || ""}
            options={topFilms}

            isOptionEqualToValue={(option, value) => option.id === value.id}
            inputValue={inputValue}
            onInputChange={(_, newInputValue) => {
                setInputValue(newInputValue)
            }}
            value={attributeValue ? attributeValue : null}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="value"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
};

export default ProductAttributeValue;