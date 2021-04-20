import { ERROR, LOADING, SUCCESS } from "src/context/actionTypes";
import axiosInstance from "src/helpers/axios";

const getPengawasan = (dispatch, order = "") => {
  dispatch({
    type: LOADING,
  });
  axiosInstance
    .get(`pengawasan?order=${order}`)
    .then((res) => {
      // console.log(res.data);
      dispatch({
        type: SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      // console.log(err.response.data);
      dispatch({
        type: ERROR,
        payload: err.response.data.message,
      });
    });
};

export default getPengawasan;
