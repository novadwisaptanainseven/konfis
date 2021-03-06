import axiosInstance from "src/helpers/axios";
import getPerencanaan from "./getPerencanaan";

const deletePerencanaan = (id, dispatch, order) => {
  axiosInstance
    .delete(`perencanaan/${id}`)
    .then((res) => {
      // console.log(res.data);
      getPerencanaan(dispatch, order);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};

export default deletePerencanaan;
