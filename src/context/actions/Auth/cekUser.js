import { ERROR, SUCCESS } from "src/context/actionTypes";
import axiosInstance from "src/helpers/axios";

export const cekUser = (userDispatch) => {
  axiosInstance
    .get("user")
    .then((res) => {
      console.log(res.data.user);
      userDispatch({
        type: SUCCESS,
        payload: res.data.user,
      });
    })
    .catch((err) => {
      //   console.log(err.response.data);
      userDispatch({
        type: ERROR,
        payload: err.response.data.message,
      });
    });
};
