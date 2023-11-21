import axios from "axios";
import {
    getAccessToken,
} from "../helpers/user";

const baseURL = process.env.REACT_APP_API_URL;

const http = axios.create({baseURL});

http.interceptors.request.use(
    async (config) => {
        const accessToken = getAccessToken();
        if (config.headers === undefined) {
            config.headers = {};
        }
        if (accessToken) {
            config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : "";
        }
        return config;
    },
    (error) => error
);

export default http;
