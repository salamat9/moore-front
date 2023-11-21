import http from "../../index";
import { SIGN_IN_URL } from "../../../constants/api/auth";
import { setUserTokensToLocalStorage } from "../../../helpers/user";

export const signIn = async ({ email, password }) => {
    try {
        const response = await http.post(SIGN_IN_URL, {
            email,
            password
        });
        if (response.request.status === 201) {
            setUserTokensToLocalStorage(
                response.data.accessToken,
                response.data.refreshToken
            )
        }
    } catch (err) {
        throw err;
    };
}