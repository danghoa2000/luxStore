import React, { Fragment, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/partial/header/Header";
import Footer from "../../components/partial/footer/Footer";

import "../../../sass/app.scss";
import "../../../sass/common.scss";
import { Button, Divider, Drawer, IconButton, Typography } from "@mui/material";
import { Add, Clear, Remove, ShoppingCart } from "@mui/icons-material";
import { formatPrice } from "../../utils/helper";
import ShowSnackbars from "../../components/partial/ShowSnackbars";
import { SESSION_ACCESS_TOKEN } from "../../utils/sessionHelper";
import { BASE_URL } from "../../constants/constants";
import BasicModal from "../../components/partial/BasicModal";

const DefaultLayout = ({
    CartItem,
    addToCart,
    decreaseQty,
    showNoti,
    setShowNoti,
    status,
    removeCartItem,
}) => {
    const [state, setState] = useState(false);
    const toggleDrawer = (state) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setState(state);
    };
    const navigate = useNavigate();
    return (
        <>
            <Header CartItem={CartItem} toggleDrawer={toggleDrawer} />
            <Outlet />
            <Footer />
            <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
                <div className="cart__product__list">
                    <div
                        style={{
                            margin: "0 20px",
                            height: 74,
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <ShoppingCart />
                        <Typography variant="h6" style={{ marginLeft: 10 }}>
                            {CartItem?.length} Item
                        </Typography>
                    </div>
                    <Divider
                        style={{
                            borderColor: "rgb(246, 249, 252)",
                            borderBottomWidth: "medium",
                            opacity: 1,
                        }}
                    />

                    {CartItem?.length > 0 ? (
                        CartItem.map((item) => {
                            return (
                                <Fragment key={item.id}>
                                    <div className="cart__product">
                                        <div className="cart__product__btn">
                                            <IconButton
                                                onClick={() => addToCart(item)}
                                            >
                                                <Add />
                                            </IconButton>
                                            <Typography variant="h7">
                                                {item?.pivot?.qty}
                                            </Typography>
                                            <IconButton
                                                onClick={() =>
                                                    decreaseQty(item)
                                                }
                                            >
                                                <Remove />
                                            </IconButton>
                                        </div>
                                        <div className="cart__product__img">
                                            <img
                                                src={
                                                    BASE_URL +
                                                    item.product.image
                                                }
                                                alt=""
                                            />
                                        </div>
                                        <div className="cart__product__detail">
                                            <Typography variant="h7">
                                                {item.name}
                                            </Typography>
                                            {item?.sale_price ? (
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "baseline",
                                                    }}
                                                >
                                                    <span className="old-price">
                                                        {formatPrice(
                                                            item?.price
                                                        )}
                                                    </span>
                                                    <span
                                                        className="new-price"
                                                        style={{
                                                            marginLeft: 5,
                                                        }}
                                                    >
                                                        {formatPrice(
                                                            item?.sale_price
                                                        )}
                                                    </span>
                                                </div>
                                            ) : (
                                                <span className="new-price">
                                                    {formatPrice(item?.price)}
                                                </span>
                                            )}
                                        </div>
                                        <div className="cart__product__remove">
                                            <IconButton
                                                onClick={() =>
                                                    removeCartItem(item.id)
                                                }
                                            >
                                                <Clear />
                                            </IconButton>
                                        </div>
                                    </div>
                                    <Divider
                                        style={{
                                            borderColor: "rgb(246, 249, 252)",
                                            borderBottomWidth: "medium",
                                            opacity: 1,
                                        }}
                                    />
                                </Fragment>
                            );
                        })
                    ) : (
                        <img
                            src="https://shop.unicornstore.in/beam/themes/2019/assets/img/cart_empty.png"
                            style={{ display: "block", margin: "auto" }}
                            alt=""
                        />
                    )}
                </div>
                {window.sessionStorage.getItem(SESSION_ACCESS_TOKEN) ? (
                    <>
                        <Button variant="contained" className="btn__checkcout">
                            Checkout Now
                        </Button>
                        <Button
                            variant="contained"
                            className="btn__view_cart"
                            onClick={() => navigate("/elite/cart")}
                        >
                            View cart
                        </Button>
                    </>
                ) : (
                    <Button
                        variant="contained"
                        className="btn__checkcout"
                        onClick={() => navigate("/customer/login")}
                    >
                        Login now
                    </Button>
                )}
            </Drawer>
            {showNoti && (
                <ShowSnackbars
                    type={status.type}
                    message={status.message}
                    setShowNoti={setShowNoti}
                />
            )}
        </>
    );
};

export default DefaultLayout;
