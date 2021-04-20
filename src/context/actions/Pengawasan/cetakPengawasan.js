const cetakPengawasan = (order = "") => {
  window.open(
    sessionStorage.baseURL + `cetak-pengawasan?order=${order}`,
    "_blank"
  );
};

export default cetakPengawasan;
