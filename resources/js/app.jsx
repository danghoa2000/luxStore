import React, { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import AdminLayout from "./src/layout/admin/AdminLayout";
import DefaultLayout from "./src/layout/DefaultLayout";

import { createRoot } from "react-dom/client";
import { AuthContext } from "./hooks/useAuth";
import { ROLE } from "./constants/constants";
import PrivateAdminRoute from "./PrivateAdminRoute"

import Data from "./components/client/Data"
import Sdata from "./components/client/shops/Sdata"

// admin
const AdminLoginContainer = lazy(() => import("./src/page/admin/login/LoginContainer"));
const AdminHomeContainer = lazy(() => import("./src/page/admin/Home/HomeContainer"));
const AdminCategoryContainer = lazy(() => import("./src/page/admin/categories/CategoryContainer"));
const AdminCategoryCreateContainer = lazy(() => import("./src/page/admin/categories/create/CategoryCreateContainer"));
const AdminCategoryUpdateContainer = lazy(() => import("./src/page/admin/categories/Update/CategoryUpdateContainer"));

// ====

const HomePageContainer = lazy(() => import("./src/page/client/HomePageContainer"));
const CartContainer = lazy(() => import("./components/partial/Cart/Cart"));
const DetailContainer = lazy(() => import("./src/page/client/Detail/DetailContainer"));
const ProductContainer = lazy(() => import("./src/page/client/Product/ProductContainer"));

const App = () => {
    const [auth, setAuth] = useState({});
    const [user, setUser] = useState({});
    const urlNotExist = useCallback(() => {
        return <Navigate to="/elite" replace />;
    }, []);
    const { productItems } = Data
    const { shopItems } = Sdata

    //Step 2 :
    const [CartItem, setCartItem] = useState([])

    //Step 4 :
    const addToCart = (product) => {
        // if hamro product alredy cart xa bhane  find garna help garxa
        const productExit = CartItem.find((item) => item.id === product.id)
        // if productExit chai alredy exit in cart then will run fun() => setCartItem
        // ani inside => setCartItem will run => map() ani yo map() chai each cart ma
        // gayara check garxa if item.id ra product.id chai match bhayo bhane
        // productExit product chai display garxa
        // ani increase  exits product QTY by 1
        // if item and product doesnt match then will add new items
        if (productExit) {
            setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
        } else {
            // but if the product doesnt exit in the cart that mean if card is empty
            // then new product is added in cart  and its qty is initalize to 1
            setCartItem([...CartItem, { ...product, qty: 1 }])
        }
    }

    // Stpe: 6
    const decreaseQty = (product) => {
        // if hamro product alredy cart xa bhane  find garna help garxa
        const productExit = CartItem.find((item) => item.id === product.id)

        // if product is exit and its qty is 1 then we will run a fun  setCartItem
        // inside  setCartItem we will run filter to check if item.id is match to product.id
        // if the item.id is doesnt match to product.id then that items are display in cart
        // else
        if (productExit.qty === 1) {
            setCartItem(CartItem.filter((item) => item.id !== product.id))
        } else {
            // if product is exit and qty  of that produt is not equal to 1
            // then will run function call setCartItem
            // inside setCartItem we will run map method
            // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
            setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
        }
    }
    return (
        <>
            {/* Admin route  */}
            <BrowserRouter>
                <AuthContext.Provider value={{ auth, setAuth, user, setUser }}>
                    <Routes>
                        <Route path="/" element={<Outlet />} >
                            <Route index element={<Navigate to="/elite" />} />
                            <Route path="/elite" element={<DefaultLayout CartItem={CartItem} />} >
                                <Route index element={
                                    <Suspense fallback={<div> Loadding 99%... </div>}>
                                        <HomePageContainer productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
                                    </Suspense>}
                                />

                                <Route path='cart' element={
                                    <Suspense fallback={<div> Loadding 99%... </div>}>
                                        <CartContainer CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
                                    </Suspense>}
                                />

                                <Route path='product' element={
                                    <Suspense fallback={<div> Loadding 99%... </div>}>
                                        <DetailContainer />
                                    </Suspense>}
                                />
                                <Route path="search" element={
                                    <Suspense fallback={<div> Loadding 99%... </div>}>
                                        <ProductContainer />
                                    </Suspense>
                                } />
                            </Route>
                            <Route path="*" element={urlNotExist} />

                            {/* admin route */}
                            <Route path="admin/*" element={<AdminLayout />}>
                                <Route index element={<AdminHomeContainer />} />
                                <Route path="blogs"
                                    element={
                                        <PrivateAdminRoute roles={[ROLE.MANAGER, ROLE.EMPLOYEE]}>
                                            <div>blogs</div>
                                        </PrivateAdminRoute>
                                    }
                                />
                                <Route path="categories"
                                    element={<Outlet />}
                                >
                                    <Route index element={
                                        <PrivateAdminRoute roles={[ROLE.MANAGER, ROLE.EMPLOYEE]}>
                                            <AdminCategoryContainer />
                                        </PrivateAdminRoute>
                                    } />

                                    <Route path="create"
                                        element={
                                            <PrivateAdminRoute roles={[ROLE.MANAGER, ROLE.EMPLOYEE]}>
                                                <AdminCategoryCreateContainer />
                                            </PrivateAdminRoute>
                                        }
                                    />
                                    <Route path="update"
                                        element={
                                            <PrivateAdminRoute roles={[ROLE.MANAGER, ROLE.EMPLOYEE]}>
                                                <AdminCategoryUpdateContainer />
                                            </PrivateAdminRoute>
                                        }
                                    />
                                </Route>
                                <Route path="contact" element={<div>contact</div>} />
                            </Route>
                            <Route path="admin/login" element={<AdminLoginContainer />} />

                        </Route>
                    </Routes>
                </AuthContext.Provider>
            </BrowserRouter>
        </>
    );
};

export default App;

if (document.getElementById("App")) {
    createRoot(document.getElementById("App")).render(<App />);
}
