export const API_BASE_URL = "http://127.0.0.1:8000/";

export const LOGIN_API = {
    LOGIN: API_BASE_URL + "api/auth/login",
    LOGOUT: API_BASE_URL + "api/auth/logout",
};

export const CATEGORIES_API = {
    LIST: API_BASE_URL + "api/auth/admin/categories",
    CREATE: API_BASE_URL + "api/auth/admin/categories/create",
    UPDATE: API_BASE_URL + "api/auth/admin/categories/update",
    SHOW: API_BASE_URL + "api/auth/admin/categories/show",
    DELETE: API_BASE_URL + "api/auth/admin/categories/delete",
};

export const ACCOUNT_API = {
    LIST: API_BASE_URL + "api/auth/admin/account",
    CREATE: API_BASE_URL + "api/auth/admin/account/create",
    UPDATE: API_BASE_URL + "api/auth/admin/account/update",
    SHOW: API_BASE_URL + "api/auth/admin/account/show",
    DELETE: API_BASE_URL + "api/auth/admin/account/delete",
};

export const MANUFACTURER_API = {
    LIST: API_BASE_URL + "api/auth/admin/manufacturer",
    CREATE: API_BASE_URL + "api/auth/admin/manufacturer/create",
    UPDATE: API_BASE_URL + "api/auth/admin/manufacturer/update",
    SHOW: API_BASE_URL + "api/auth/admin/manufacturer/show",
    DELETE: API_BASE_URL + "api/auth/admin/manufacturer/delete",
};

export const GROUP_CATEGORY_API = {
    LIST: API_BASE_URL + "api/auth/admin/group-category",
    CREATE: API_BASE_URL + "api/auth/admin/group-category/create",
    UPDATE: API_BASE_URL + "api/auth/admin/group-category/update",
    SHOW: API_BASE_URL + "api/auth/admin/group-category/show",
    DELETE: API_BASE_URL + "api/auth/admin/group-category/delete",
};

export const SHIPPING_API = {
    LIST: API_BASE_URL + "api/auth/admin/shipping",
    CREATE: API_BASE_URL + "api/auth/admin/shipping/create",
    UPDATE: API_BASE_URL + "api/auth/admin/shipping/update",
    SHOW: API_BASE_URL + "api/auth/admin/shipping/show",
};

export const PRODUCT_API = {
    LIST: API_BASE_URL + "api/auth/admin/product",
    CREATE: API_BASE_URL + "api/auth/admin/product/create",
    UPDATE: API_BASE_URL + "api/auth/admin/product/update",
    SHOW: API_BASE_URL + "api/auth/admin/product/show",
};
