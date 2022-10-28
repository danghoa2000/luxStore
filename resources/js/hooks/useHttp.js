import axios from "axios";
import { createBrowserHistory } from "history";
import {
    ADMIN_SESSION_ACCESS_TOKEN,
    getAccessToken,
} from "../utils/sessionHelper";

export const axiosClient = axios.create();
const history = createBrowserHistory();

axiosClient.defaults.headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
};

// axiosClient.defaults.headers["Access-Control-Allow-Methods"] = "*";
// axiosClient.defaults.headers["Access-Control-Allow-Headers"] = "*";
// axiosClient.defaults.headers["Access-Control-Allow-Origin"] = "*";
// axiosClient.defaults.baseURL = 'http://127.0.0.1:8000/';

let token = getAccessToken();
const paths = history.location.pathname;
const arrayPaths = paths.split("/");
if (arrayPaths[1] === "admin") {
    token = window.sessionStorage.getItem(ADMIN_SESSION_ACCESS_TOKEN);
}
if (token) {
    // axiosClient.defaults.headers["Access-Control-Allow-Origin"] = "*";
    axiosClient.defaults.headers["Authorization"] = `Bearer ${token}`;

        // "Origin, X-Requested-With, Content-Type, Accept";
    // axios.defaults.headers["Content-type"] = "Application/json";
}

axiosClient.interceptors.request.use(function (config) {
    return config;
});

// axiosClient.interceptors.response.use(
//     function (response) {
//         //Dispatch any action on success
//         return response;
//     },
//     function (error) {
//         if (error.response.status === 401) {
//             //Add Logic to
//             //1. Redirect to login page or
//             //2. Request refresh token
//         }
//         return Promise.reject(error);
//     },
//     null,
//     { synchronous: true }
// );

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;

axios.defaults.withCredentials = false;
