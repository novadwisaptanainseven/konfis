import axiosInstance from "src/helpers/axios";
import getPengawasan from "./getPengawasan";

const deletePengawasan = (id, dispatch) => {
  axiosInstance
    .delete(`pengawasan/${id}`)
    .then((res) => {
      console.log(res.data);
      getPengawasan(dispatch);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export default deletePengawasan;
