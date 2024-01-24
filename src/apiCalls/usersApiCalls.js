import axios from "axios";

axios.defaults.withCredentials = true;

export const signup = async (dispatchUsers, data) => {
  try {
    const response = await axios.post(
      "https://record-shop-tomek-back.onrender.com/users/signup",
      data
    );

    dispatchUsers({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (dispatchUsers, data) => {
  try {
    const response = await axios.post(
      "https://record-shop-tomek-back.onrender.com/users/login",
      data
    );

    dispatchUsers({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (dispatchUsers) => {
  try {
    await axios.get("https://record-shop-tomek-back.onrender.com/users/logout");
    dispatchUsers({ type: "LOGOUT" });
  } catch (error) {
    console.log(error);
  }
};

export const getMyData = async (dispatchUsers) => {
  try {
    const response = await axios.get("https://record-shop-tomek-back.onrender.com/users/me");

    if (response.data && response.data.isAuthenticated) {
      dispatchUsers({ type: "LOGIN_SUCCESS", payload: response.data });
    }
  } catch (error) {
    console.log(error);
  }
};
