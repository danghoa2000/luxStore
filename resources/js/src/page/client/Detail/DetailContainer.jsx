import React, { useState } from 'react';
import Detail from './Detail';

const DetailContainer = () => {
    const [qty, setQty] = useState(1);

    return <Detail
        qty={qty}
        setQty={setQty}
    />
};

export default DetailContainer;