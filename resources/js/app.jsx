import React, { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import AdminLayout from "./src/layout/AdminLayout";
import DefaultLayout from "./src/layout/DefaultLayout";

import { AuthContext } from "./hooks/useAuth";
import { ROLE } from "./constants/constants";
import PrivateAdminRoute from "./PrivateAdminRoute"

import Data from "./components/client/Data"
import Sdata from "./components/client/shops/Sdata"
import Loading from "./components/partial/Loading";
import { SearchFieldContext } from "./hooks/useSearchField";

// admin
const AdminLoginContainer = lazy(() => import("./src/page/admin/login/LoginContainer"));
const AdminHomeContainer = lazy(() => import("./src/page/admin/Home/HomeContainer"));

const AdminCategoryContainer = lazy(() => import("./src/page/admin/categories/CategoryContainer"));
const AdminCategoryCreateContainer = lazy(() => import("./src/page/admin/categories/create/CategoryCreateContainer"));
const AdminCategoryUpdateContainer = lazy(() => import("./src/page/admin/categories/Update/CategoryUpdateContainer"));

const AdminAccountContainer = lazy(() => import("./src/page/admin/account/AccountContainer"));
const AdminAccountCreateContainer = lazy(() => import("./src/page/admin/account/create/AccountCreateContainer"));
const AdminAccountUpdateContainer = lazy(() => import("./src/page/admin/account/update/AccountUpdateContainer"));

const AdminManufacturerContainer = lazy(() => import("./src/page/admin/manufacturer/ManufacturerContainer"));
const AdminManufacturerCreateContainer = lazy(() => import("./src/page/admin/manufacturer/create/ManufacturerCreateContainer"));
const AdminManufacturerUpdateContainer = lazy(() => import("./src/page/admin/manufacturer/update/ManufacturerUpdateContainer"));

const AdminGroupCategoryContainer = lazy(() => import("./src/page/admin/groupCategory/GroupCategoryContainer"));
const AdminGroupCategoryCreateContainer = lazy(() => import("./src/page/admin/groupCategory/create/GroupCategoryCreateContainer"));
const AdminGroupCategoryUpdateContainer = lazy(() => import("./src/page/admin/groupCategory/update/GroupCategoryUpdateContainer"));

const AdminProductContainer = lazy(() => import("./src/page/admin/Product/ProductContainer"));
const AdminProductCreateContainer = lazy(() => import("./src/page/admin/Product/create/ProductCreateContainer"));
const AdminProductUpdateContainer = lazy(() => import("./src/page/admin/Product/update/ProductUpdateContainer"));

const AdminShippingContainer = lazy(() => import("./src/page/admin/shipping/ShippingContainer"));
const AdminEventContainer = lazy(() => import("./src/page/admin/event/EventContainer"));
// ====

const HomePageContainer = lazy(() => import("./src/page/client/HomePageContainer"));
const CartContainer = lazy(() => import("./components/partial/Cart/Cart"));
const DetailContainer = lazy(() => import("./src/page/client/Detail/DetailContainer"));
const ProductContainer = lazy(() => import("./src/page/client/Product/ProductContainer"));

const App = () => {
    const [auth, setAuth] = useState({});
    const [user, setUser] = useState({});
    const [searchField, setSearchFiled] = useState({});

    const { productItems } = Data
    const { shopItems } = Sdata
    const [CartItem, setCartItem] = useState([])

    const addToCart = (product) => {
        const productExit = CartItem.find((item) => item.id === product.id)
        if (productExit) {
            setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
        } else {
            setCartItem([...CartItem, { ...product, qty: 1 }])
        }
    }
    const decreaseQty = (product) => {
        const productExit = CartItem.find((item) => item.id === product.id)
        if (productExit.qty === 1) {
            setCartItem(CartItem.filter((item) => item.id !== product.id))
        } else {
            setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
        }
    }

    const removeCartItem = () => {
        
    }
    const urlNotExist = useCallback(() => {
        return <Navigate to="/elite" replace />;
    }, []);

    return (
        <>
            {/* Admin route  */}
            <BrowserRouter>
                <AuthContext.Provider value={{ auth, setAuth, user, setUser }}>
                    <SearchFieldContext.Provider value={{ searchField, setSearchFiled }}>
                        <Routes>
                            <Route path="/" element={<Outlet />} >
                                <Route index element={<Navigate to="/elite" />} />
                                <Route path="/elite" element={<DefaultLayout CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty}/>} >
                                    <Route index element={
                                        <Suspense fallback={<Loading />}>
                                            <HomePageContainer productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
                                        </Suspense>}
                                    />

                                    <Route path='cart' element={
                                        <Suspense fallback={<Loading />}>
                                            <CartContainer CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
                                        </Suspense>}
                                    />

                                    <Route path='product' element={
                                        <Suspense fallback={<Loading />}>
                                            <DetailContainer />
                                        </Suspense>}
                                    />
                                    <Route path="search" element={
                                        <Suspense fallback={<Loading />}>
                                            <ProductContainer />
                                        </Suspense>
                                    } />
                                </Route>
                                <Route path="*" element={urlNotExist} />

                                {/* admin route */}
                                <Route path="admin/*" element={<AdminLayout />}>
                                    <Route index element={
                                        <Suspense fallback={<Loading />}>
                                            <AdminHomeContainer />
                                        </Suspense>} />
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
                                    <Route path="account"
                                        element={<Outlet />}
                                    >
                                        <Route index element={
                                            <Suspense fallback={<Loading />}>
                                                <PrivateAdminRoute roles={[ROLE.MANAGER, ROLE.EMPLOYEE]}>
                                                    <AdminAccountContainer />
                                                </PrivateAdminRoute>
                                            </Suspense>}

                                        />

                                        <Route path="create"
                                            element={
                                                <Suspense fallback={<Loading />}>
                                                    <PrivateAdminRoute roles={[ROLE.MANAGER, ROLE.EMPLOYEE]}>
                                                        <AdminAccountCreateContainer />
                                                    </PrivateAdminRoute>
                                                </Suspense>
                                            }
                                        />
                                        <Route path="update"
                                            element={
                                                <Suspense fallback={<Loading />}>
                                                    <PrivateAdminRoute roles={[ROLE.MANAGER, ROLE.EMPLOYEE]}>
                                                        <AdminAccountUpdateContainer />
                                                    </PrivateAdminRoute>
                                                </Suspense>

                                            }
                                        />
                                    </Route>
                                    <Route path="manufacturer"
                                        element={<Outlet />}
                                    >
                                        <Route index element={
                                            <Suspense fallback={<Loading />}>
                                                <PrivateAdminRoute roles={[ROLE.MANAGER, ROLE.EMPLOYEE]}>
                                                    <AdminManufacturerContainer />
                                                </PrivateAdminRoute>
                                            </Suspense>}

                                        />

                                        <Route path="create"
                                            element={
                                                <Suspense fallback={<Loading />}>
                                                    <PrivateAdminRoute roles={[ROLE.MANAGER, ROLE.EMPLOYEE]}>
                                                        <AdminManufacturerCreateContainer />
                                                    </PrivateAdminRoute>
                                                </Suspense>
                                            }
                                        />
                                        <Route path="update"
                                            element={
                                                <Suspense fallback={<Loading />}>
                                                    <PrivateAdminRoute roles={[ROLE.MANAGER, ROLE.EMPLOYEE]}>
                                                        <AdminManufacturerUpdateContainer />
                                                    </PrivateAdminRoute>
                                                </Suspense>

                                            }
                                        />
                                    </Route>
                                    <Route path="group-category"
                                        element={<Outlet />}
                                    >
                                        <Route index element={
                                            <Suspense fallback={<Loading />}>
                                                <PrivateAdminRoute roles={[ROLE.MANAGER, ROLE.EMPLOYEE]}>
                                                    <AdminGroupCategoryContainer />
                                                </PrivateAdminRoute>
                                            </Suspense>}

                                        />

                                        <Route path="create"
                                            element={
                                                <Suspense fallback={<Loading />}>
                                                    <PrivateAdminRoute roles={[ROLE.MANAGER, ROLE.EMPLOYEE]}>
                                                        <AdminGroupCategoryCreateContainer />
                                                    </PrivateAdminRoute>
                                                </Suspense>
                                            }
                                        />
                                        <Route path="update"
                                            element={
                                                <Suspense fallback={<Loading />}>
                                                    <PrivateAdminRoute roles={[ROLE.MANAGER, ROLE.EMPLOYEE]}>
                                                        <AdminGroupCategoryUpdateContainer />
                                                    </PrivateAdminRoute>
                                                </Suspense>

                                            }
                                        />
                                    </Route>
                                    <Route path="shipping"
                                        element={<Outlet />}
                                    >
                                        <Route index element={
                                            <Suspense fallback={<Loading />}>
                                                <PrivateAdminRoute roles={[ROLE.MANAGER, ROLE.EMPLOYEE]}>
                                                    <AdminShippingContainer />
                                                </PrivateAdminRoute>
                                            </Suspense>}

                                        />

                                        <Route path="create"
                                            element={
                                                <Suspense fallback={<Loading />}>
                                                    <PrivateAdminRoute roles={[ROLE.MANAGER, ROLE.EMPLOYEE]}>
                                                        <AdminManufacturerCreateContainer />
                                                    </PrivateAdminRoute>
                                                </Suspense>
                                            }
                                        />
                                        <Route path="update"
                                            element={
                                                <Suspense fallback={<Loading />}>
                                                    <PrivateAdminRoute roles={[ROLE.MANAGER, ROLE.EMPLOYEE]}>
                                                        <AdminManufacturerUpdateContainer />
                                                    </PrivateAdminRoute>
                                                </Suspense>

                                            }
                                        />
                                    </Route>

                                    <Route path="product"
                                        element={<Outlet />}
                                    >
                                        <Route index element={
                                            <Suspense fallback={<Loading />}>
                                                <PrivateAdminRoute roles={[ROLE.MANAGER, ROLE.EMPLOYEE]}>
                                                    <AdminProductContainer />
                                                </PrivateAdminRoute>
                                            </Suspense>}

                                        />

                                        <Route path="create"
                                            element={
                                                <Suspense fallback={<Loading />}>
                                                    <PrivateAdminRoute roles={[ROLE.MANAGER, ROLE.EMPLOYEE]}>
                                                        <AdminProductCreateContainer />
                                                    </PrivateAdminRoute>
                                                </Suspense>
                                            }
                                        />
                                        <Route path="update"
                                            element={
                                                <Suspense fallback={<Loading />}>
                                                    <PrivateAdminRoute roles={[ROLE.MANAGER, ROLE.EMPLOYEE]}>
                                                        <AdminProductUpdateContainer />
                                                    </PrivateAdminRoute>
                                                </Suspense>

                                            }
                                        />
                                    </Route>
                                    <Route path="event"
                                        element={<Outlet />}
                                    >
                                        <Route index element={
                                            <Suspense fallback={<Loading />}>
                                                <PrivateAdminRoute roles={[ROLE.MANAGER, ROLE.EMPLOYEE]}>
                                                    <AdminEventContainer />
                                                </PrivateAdminRoute>
                                            </Suspense>}

                                        />
                                    </Route>
                                    <Route path="contact" element={<div>contact</div>} />
                                </Route>
                                <Route path="admin/login" element={
                                    <Suspense fallback={<Loading />}>
                                        <AdminLoginContainer />
                                    </Suspense>} />

                            </Route>
                        </Routes>
                    </SearchFieldContext.Provider>
                </AuthContext.Provider>
            </BrowserRouter>
        </>
    );
};

export default App;
