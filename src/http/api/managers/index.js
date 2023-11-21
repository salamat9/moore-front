import http from "../../index";
import { GET_MANAGERS } from "../../../constants/api/managers";

export const getManagers = async () => {
    try {
        const response = await http.get(GET_MANAGERS);
        if (response.request.status === 200) {
            return response.data.managers;
        }
    } catch (err) {
        throw err;
    }
};