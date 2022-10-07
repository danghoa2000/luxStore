import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../../components/partial/header/Header"
import Footer from "../../components/partial/footer/Footer"

import "../../../sass/app.scss";
import "../../../sass/common.scss";

const DefaultLayout = ({ CartItem }) => {
    return (
        <>
            <Header CartItem={CartItem} />
            <Outlet />
            <Footer />
        </>
    );
};

export default DefaultLayout;
