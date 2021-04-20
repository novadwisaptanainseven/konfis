import {
  CButton,
  CForm,
  CModalBody,
  CModalFooter,
  CLabel,
  CInput,
  CFormGroup,
  CTextarea,
} from "@coreui/react";
import React, { useEffect, useState } from "react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import * as Yup from "yup";
import { Formik } from "formik";
import getPengawasanById from "src/context/actions/Pengawasan/getPengawasanById";
import editPengawasan from "src/context/actions/Pengawasan/editPengawasan";

const MySwal = withReactContent(swal2);

const Edit = ({ setModal, modal }) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Get Pengawasan by id
    if (modal.id) {
      getPengawasanById(modal.id, setData);
    }

    return () => setData("");
  }, [modal]);

  const initState = {
    kode_bidang: data ? data.kode_bidang : "",
    no_urut: data ? data.no_urut : "",
    no_dpa: data ? data.no_dpa : "",
    uraian: data ? data.uraian : "",
    tanggal: data ? data.tanggal : "",
    ttd: data ? data.ttd : "",
  };

  const validationSchema = Yup.object().shape({
    kode_bidang: Yup.string().required("Kode bidang harus diisi"),
    no_urut: Yup.string().required("No. urut harus diisi"),
    no_dpa: Yup.string().required("No. DPA harus diisi"),
    uraian: Yup.string().required("Uraian harus diisi"),
    tanggal: Yup.string().required("Tanggal harus diisi"),
    ttd: Yup.string().required("Ttd harus diisi"),
  });

  // Fungsi untuk menampilkan alert success edit data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Edit Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      setModal((prevVal) => ({
        ...prevVal,
        id: null,
        modal: false,
      }));
    });
  };

  // Fungsi untuk menampilkan alert error tambah data
  const showAlertError = (message) => {
    let err_message = "";

    for (const key in message) {
      err_message += `${message[key]}, `;
    }

    MySwal.fire({
      icon: "error",
      title: "Tambah Data Gagal",
      text: err_message,
    }).then((result) => {
      setLoading(false);
    });
  };

  const handleFormSubmit = (values) => {
    editPengawasan(
      modal.id,
      values,
      setLoading,
      showAlertSuccess,
      showAlertError
    );
  };

  return (
    <>
      {!data ? (
        <div className="text-center my-3">
          <h4>Loading...</h4>
        </div>
      ) : (
        <Formik
          initialValues={initState}
          validationSchema={validationSchema}
          enableReinitialize={true}
          onSubmit={(values) => handleFormSubmit(values)}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
            handleBlur,
          }) => (
            <CForm onSubmit={handleSubmit}>
              <CModalBody>
                <CFormGroup>
                  <CLabel>Kode Bidang</CLabel>
                  <CInput
                    type="text"
                    id="kode_bidang"
                    name="kode_bidang"
                    placeholder="Masukkan kode bidang"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.kode_bidang || ""}
                    className={
                      errors.kode_bidang && touched.kode_bidang
                        ? "is-invalid"
                        : null
                    }
                  />
                  {errors.kode_bidang && touched.kode_bidang && (
                    <div className="invalid-feedback">{errors.kode_bidang}</div>
                  )}
                </CFormGroup>
                <CFormGroup>
                  <CLabel>No. Urut</CLabel>
                  <CInput
                    type="text"
                    id="no_urut"
                    name="no_urut"
                    placeholder="Masukkan nomor urut"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.no_urut || ""}
                    className={
                      errors.no_urut && touched.no_urut ? "is-invalid" : null
                    }
                  />
                  {errors.no_urut && touched.no_urut && (
                    <div className="invalid-feedback">{errors.no_urut}</div>
                  )}
                </CFormGroup>
                <CFormGroup>
                  <CLabel>No. DPA</CLabel>
                  <CInput
                    type="text"
                    id="no_dpa"
                    name="no_dpa"
                    placeholder="Masukkan nomor DPA"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.no_dpa || ""}
                    className={
                      errors.no_dpa && touched.no_dpa ? "is-invalid" : null
                    }
                  />
                  {errors.no_dpa && touched.no_dpa && (
                    <div className="invalid-feedback">{errors.no_dpa}</div>
                  )}
                </CFormGroup>
                <CFormGroup>
                  <CLabel>Uraian</CLabel>
                  <CTextarea
                    id="uraian"
                    name="uraian"
                    placeholder="Masukkan uraian / keterangan"
                    rows={5}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.uraian || ""}
                    className={
                      errors.uraian && touched.uraian ? "is-invalid" : null
                    }
                  />
                  {errors.uraian && touched.uraian && (
                    <div className="invalid-feedback">{errors.uraian}</div>
                  )}
                </CFormGroup>
                <CFormGroup>
                  <CLabel>Tanggal</CLabel>
                  <CInput
                    type="date"
                    id="tanggal"
                    name="tanggal"
                    placeholder="Masukkan tanggal"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tanggal || ""}
                    className={
                      errors.tanggal && touched.tanggal ? "is-invalid" : null
                    }
                  />
                  {errors.tanggal && touched.tanggal && (
                    <div className="invalid-feedback">{errors.tanggal}</div>
                  )}
                </CFormGroup>
                <CFormGroup>
                  <CLabel>TTD</CLabel>
                  <CInput
                    type="text"
                    id="ttd"
                    name="ttd"
                    placeholder="Masukkan ttd"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.ttd || ""}
                    className={errors.ttd && touched.ttd ? "is-invalid" : null}
                  />
                  {errors.ttd && touched.ttd && (
                    <div className="invalid-feedback">{errors.ttd}</div>
                  )}
                </CFormGroup>
              </CModalBody>
              <CModalFooter>
                <CButton
                  type="submit"
                  color="primary"
                  disabled={loading ? true : false}
                >
                  {loading ? "Sedang Menyimpan..." : "Simpan"}
                </CButton>{" "}
                <CButton
                  color="secondary"
                  onClick={() =>
                    setModal((prevVal) => ({
                      ...prevVal,
                      id: null,
                      modal: false,
                    }))
                  }
                >
                  Cancel
                </CButton>
              </CModalFooter>
            </CForm>
          )}
        </Formik>
      )}
    </>
  );
};

export default Edit;
