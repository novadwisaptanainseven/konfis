import axiosInstance from "src/helpers/axios";

const getPengawasanById = (id, setData) => {
  axiosInstance
    .get(`pengawasan/${id}`)
    .then((res) => {
      console.log(res.data);
      setData(res.data.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export default getPengawasanById;
