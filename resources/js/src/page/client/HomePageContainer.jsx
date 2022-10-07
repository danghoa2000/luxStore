import React from 'react';
import HomePage from './HomePage';

const HomePageContainer = ({ productItems, addToCart, CartItem, shopItems }) => {
    return (
        <HomePage
            productItems={productItems}
            addToCart={addToCart}
            CartItem={CartItem}
            shopItems={shopItems} />
    );
};

export default HomePageContainer;