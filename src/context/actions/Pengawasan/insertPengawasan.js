import axiosInstance from "src/helpers/axios";

const insertPengawasan = (
  values,
  setLoading,
  showAlertSuccess,
  showAlertError
) => {
  axiosInstance
    .post(`pengawasan`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
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

export default insertPengawasan;
