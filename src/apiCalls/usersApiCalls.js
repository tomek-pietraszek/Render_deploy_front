import axios from "axios";

axios.defaults.withCredentials = true;

export const signup = async (dispatchUsers, data) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/users/signup",
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
      "http://localhost:8000/users/login",
      data
    );

    dispatchUsers({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (dispatchUsers) => {
  try {
    await axios.get("http://localhost:8000/users/logout");
    dispatchUsers({ type: "LOGOUT" });
  } catch (error) {
    console.log(error);
  }
};

export const getMyData = async (dispatchUsers) => {
  try {
    const response = await axios.get("http://localhost:8000/users/me");

    if (response.data && response.data.isAuthenticated) {
      dispatchUsers({ type: "LOGIN_SUCCESS", payload: response.data });
    }
  } catch (error) {
    console.log(error);
  }
};
