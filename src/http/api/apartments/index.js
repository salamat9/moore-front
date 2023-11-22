import http from "../../index";
import { API_APARTMENTS } from "../../../constants/api/apartments/index";

export const getApartments = async (status, buildingId) => {
  try {
    let url = '?';
    if (status) url += `status=${status}&`;
    if (buildingId) url += `buildingId=${buildingId}`
    const response = await http.get(`${API_APARTMENTS}${url}`);
    if (response.request.status === 200) {
      return response.data.apartments;
    }
  } catch (err) {
    throw err;
  }
}

export const createApartment = async ({ number, floor, square, price, status, description, building }) => {
  try {
    const response = await http.post(API_APARTMENTS, {
      number, floor, square, price, status, description, building
    })
    if (response.request.status === 201) {
      return response.data;
    }
  } catch (err) {
    throw err;
  };
};

export const updateApartment = async (id, {  number, floor, square, price, status, description, clients, building }) => {
  try {
    const response = await http.put(`${API_APARTMENTS}/${id}`, {
      number, floor, square, price, status, description, clients, building
    });
    if (response.request.status === 201) {
      return response.data;
    }
  } catch (err) {
    throw err;
  };
};

export const deleteApartment = async ({ id }) => {
  try {
    const response = await http.delete(`${API_APARTMENTS}/${id}`)
    if (response.request.status === 200) {
      return response.data;
    }
  } catch (err) {
    throw err;
  };
};
