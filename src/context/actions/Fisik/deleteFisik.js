import axiosInstance from "src/helpers/axios";
import getFisik from "./getFisik";

const deleteFisik = (id, dispatch, order) => {
  axiosInstance
    .delete(`fisik/${id}`)
    .then((res) => {
      // console.log(res.data);
      getFisik(dispatch, order);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};

export default deleteFisik;
