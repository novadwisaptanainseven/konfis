const cetakPerencanaan = (order = "") => {
  window.open(
    sessionStorage.baseURL + `cetak-perencanaan?order=${order}`,
    "_blank"
  );
};

export default cetakPerencanaan;
