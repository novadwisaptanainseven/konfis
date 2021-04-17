import axiosInstance from "src/helpers/axios";

const editPerencanaan = (
  id,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError
) => {
  axiosInstance
    .put(`perencanaan/${id}`, values)
    .then((res) => {
      console.log(res.data);
      setLoading(false);
      showAlertSuccess();
    })
    .catch((err) => {
      console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};

export default editPerencanaan;
