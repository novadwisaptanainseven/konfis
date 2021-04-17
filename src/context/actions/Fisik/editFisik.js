import axiosInstance from "src/helpers/axios";

const editFisik = (
  id,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError
) => {
  axiosInstance
    .put(`fisik/${id}`, values)
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

export default editFisik;
