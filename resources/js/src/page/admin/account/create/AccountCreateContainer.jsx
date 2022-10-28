import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountCreate from './AccountCreate';

const AccountCreateContainer = () => {

    const navigate = useNavigate();
    const [toggleDirection, setToggleDirection] = useState(false);

    const redirectBack = () => navigate(-1);

    const handleCreate = useCallback((value) => {
        console.log(value);
    }, []);
    return <AccountCreate
        redirectBack={redirectBack}
        handleCreate={handleCreate}
        toggleDirection={toggleDirection}
        setToggleDirection={setToggleDirection}
    />
};

export default AccountCreateContainer;