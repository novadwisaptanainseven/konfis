import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

// const baseURL = "https://disperkim.samarindakota.go.id/konfis_api/api/";
const baseURL = "http://127.0.0.1:8000/api/";
sessionStorage.baseURL = baseURL;
let headers = {};

console.log("Base URL: ", baseURL);

if (sessionStorage.token) {
  headers.Authorization = `Bearer ${sessionStorage.token}`;
}

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers,
});

// Alert wrong token (forbidden access)
const showAlertForbidden = () => {
  MySwal.fire({
    icon: "error",
    title: "Akses Diblok",
    text: "Token Salah!",
  }).then((result) => {
    window.location.href = "/konfis/login";
  });
};

axiosInstance.interceptors.response.use(
  (response) => {
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  },
  (error) => {
    if (!error.response) {
      return new Promise((resolve, reject) => {});
    }
    if (error.response.status === 403) {
      sessionStorage.removeItem("token");
      console.log("Error Status 403 Executed");
      showAlertForbidden();
      //   window.location.href = "/konfis/login";
      return new Promise((resolve, reject) => {
        reject(error);
      });
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
);

export default axiosInstance;
