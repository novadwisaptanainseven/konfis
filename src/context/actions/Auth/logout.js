import axiosInstance from "src/helpers/axios";

const logout = () => {
  axiosInstance
    .post("logout")
    .then((res) => {})
    .catch((err) => console.log(err.response.data.message));
};

export default logout;
