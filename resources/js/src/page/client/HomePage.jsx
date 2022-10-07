import React from 'react';

import Home from "../../../components/client/MainPage/Home"
import FlashDeals from "../../../components/client/flashDeals/FlashDeals"
import TopCate from "../../../components/client/top/TopCate"
import NewArrivals from "../../../components/client/newarrivals/NewArrivals"
import Discount from "../../../components/client/discount/Discount"
import Shop from "../../../components/client/shops/Shop"
import Annocument from "../../../components/client/annocument/Annocument"
import Wrapper from "../../../components/client/wrapper/Wrapper"

const HomePage = ({ productItems, addToCart, CartItem, shopItems }) => {
    return (
        <>
            <Home CartItem={CartItem} />
            <FlashDeals productItems={productItems} addToCart={addToCart} />
            <TopCate />
            <NewArrivals />
            <Discount />
            <Shop shopItems={shopItems} addToCart={addToCart} />
            <Annocument />
            <Wrapper />
        </>
    );
};

export default HomePage;