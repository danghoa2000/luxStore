export const SESSION_ACCESS_TOKEN = "accessToken";

export const getAccessToken = () => {
    return window.sessionStorage.getItem(SESSION_ACCESS_TOKEN) || "";
};

export const saveAccessToken = (token) => {
    window.sessionStorage.setItem(SESSION_ACCESS_TOKEN, token || "");
};

export const deleteSession = (token) => {
    window.sessionStorage.clear(token);
};
