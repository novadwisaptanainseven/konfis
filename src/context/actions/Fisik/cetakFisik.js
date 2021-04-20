const cetakFisik = (order = "") => {
  window.open(sessionStorage.baseURL + `cetak-fisik?order=${order}`, "_blank");
};

export default cetakFisik;
