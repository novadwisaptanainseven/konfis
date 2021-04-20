import axiosInstance from "src/helpers/axios";

const getPerencanaanById = (id, setData) => {
  axiosInstance
    .get(`perencanaan/${id}`)
    .then((res) => {
      // console.log(res.data);
      setData(res.data.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};

export default getPerencanaanById;
