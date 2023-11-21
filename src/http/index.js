import axios from "axios";
import {
    getAccessToken,
    getRefreshToken,
    setUserTokensToLocalStorage,
    cleanUserTokensFromLocalStorage
} from "../helpers/user";
import { REFRESH_TOKEN_URL, SIGN_IN_URL } from "../constants/api/auth";

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

let refresh = false;

http.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error?.response?.status === 401 && !refresh) {
      refresh = true;
      try {
        const response = await axios.post(
          `${baseURL}/${REFRESH_TOKEN_URL}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${getRefreshToken()}`,
            },
          }
        );
        setUserTokensToLocalStorage(
          response.data.accessToken,
          response.data.refreshToken
        );
        error.config.headers = {
          ...error.config.headers,
          Authorization: `Bearer ${response.data.accessToken}`,
        };
        if (response.data.accessToken?.length) refresh = false;
        return await http.request(error.config);
      } catch (er) {
        cleanUserTokensFromLocalStorage();
        // eslint-disable-next-line no-return-assign
        return (window.location.href = SIGN_IN_URL);
      }
    }
    refresh = false;
    return error;
  }
);

export default http;
