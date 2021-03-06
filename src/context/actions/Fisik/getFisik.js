import { ERROR, LOADING, SUCCESS } from "src/context/actionTypes";
import axiosInstance from "src/helpers/axios";

const getFisik = (dispatch, order = "") => {
  dispatch({
    type: LOADING,
  });
  axiosInstance
    .get(`fisik?order=${order}`)
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

export default getFisik;
