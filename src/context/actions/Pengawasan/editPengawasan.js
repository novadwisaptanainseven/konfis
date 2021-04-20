import axiosInstance from "src/helpers/axios";

const editPengawasan = (
  id,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError
) => {
  setLoading(true);
  axiosInstance
    .put(`pengawasan/${id}`, values)
    .then((res) => {
      // console.log(res.data);
      setLoading(false);
      showAlertSuccess();
    })
    .catch((err) => {
      // console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};

export default editPengawasan;
