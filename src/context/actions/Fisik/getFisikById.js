import axiosInstance from "src/helpers/axios";

const getFisikById = (id, setData) => {
  axiosInstance
    .get(`fisik/${id}`)
    .then((res) => {
      console.log(res.data);
      setData(res.data.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export default getFisikById;
