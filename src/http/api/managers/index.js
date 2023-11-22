import http from "../../index";
import { API_MANAGERS } from "../../../constants/api/managers";

export const getManagers = async ({ roleName }) => {
  try {
    const response = await http.get(`${API_MANAGERS}?roleName=${roleName}`);
    if (response.request.status === 200) {
      return response.data.managers;
    }
  } catch (err) {
    throw err;
  }
};

export const createManager = async (data) => {
  try {
    const { firstName, lastName, surName, phone, email, password } = data
    const response = await http.post(API_MANAGERS, {
      firstName, lastName, surName, phone, email, password,
    })
    if (response.request.status === 201) {
      return response.data;
    }
  } catch (err) {
    throw err;
  };
};

export const updateManager = async ({ id, data }) => {
  try {
    const { firstName, lastName, surName, phone, email } = data
    const response = await http.put(`${API_MANAGERS}/${id}`, {
      firstName, lastName, surName, phone, email,
    });
    if (response.request.status === 201) {
      return response.data;
    }
  } catch (err) {
    throw err;
  };
};

export const deleteManager = async ({ id }) => {
  try {
    const response = await http.delete(`${API_MANAGERS}/${id}`)
    if (response.request.status === 200) {
      return response.data;
    }
  } catch (err) {
    throw err;
  };
};
