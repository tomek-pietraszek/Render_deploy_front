import axios from "axios";

axios.defaults.withCredentials = true;

export const signup = async (dispatchUsers, data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API}/users/signup`,
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
      `${process.env.REACT_APP_API}/users/login`,
      data
    );

    dispatchUsers({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (dispatchUsers) => {
  try {
    await axios.get(`${process.env.REACT_APP_API}/users/logout`);
    dispatchUsers({ type: "LOGOUT" });
  } catch (error) {
    console.log(error);
  }
};

export const getMyData = async (dispatchUsers) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}/users/me`);

    if (response.data && response.data.isAuthenticated) {
      dispatchUsers({ type: "LOGIN_SUCCESS", payload: response.data });
    }
  } catch (error) {
    console.log(error);
  }
};
