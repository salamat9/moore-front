import http from "../../index";
import {GET_APARTMENTS} from "../../../constants/api/apartments/index";

export const getApartments = async () => {
  try {
    const response = await http.get(GET_APARTMENTS);
    if (response.request.status === 200) {
      console.log(response.data);
      return response.data;
    }
  } catch (err) {
    throw err;
  }
}