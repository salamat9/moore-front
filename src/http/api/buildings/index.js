import http from "../../index";
import { API_BUILDINGS } from "../../../constants/api/buildings/index";

export const getBuildings = async () => {
    try {
        const response = await http.get(API_BUILDINGS);
        if (response.request.status === 200) {
            return response.data.buildings;
        }
    } catch (err) {
        throw err;
    }
}