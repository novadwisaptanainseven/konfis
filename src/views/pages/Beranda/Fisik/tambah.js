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
import React from "react";

const Tambah = ({ setModal }) => {
  return (
    <>
      <CForm>
        <CModalBody>
          <CFormGroup>
            <CLabel>Kode Bidang</CLabel>
            <CInput
              type="text"
              id="kode_bidang"
              name="kode_bidang"
              placeholder="Masukkan kode bidang"
            />
          </CFormGroup>
          <CFormGroup>
            <CLabel>No. Urut</CLabel>
            <CInput
              type="text"
              id="no_urut"
              name="no_urut"
              placeholder="Masukkan nomor urut"
            />
          </CFormGroup>
          <CFormGroup>
            <CLabel>No. DPA</CLabel>
            <CInput
              type="text"
              id="no_dpa"
              name="no_dpa"
              placeholder="Masukkan nomor DPA"
            />
          </CFormGroup>
          <CFormGroup>
            <CLabel>Uraian</CLabel>
            <CTextarea
              id="uraian"
              name="uraian"
              placeholder="Masukkan uraian / keterangan"
              rows={5}
            />
          </CFormGroup>
          <CFormGroup>
            <CLabel>Tanggal</CLabel>
            <CInput
              type="date"
              id="tanggal"
              name="tanggal"
              placeholder="Masukkan tanggal"
            />
          </CFormGroup>
          <CFormGroup>
            <CLabel>TTD</CLabel>
            <CInput
              type="text"
              id="ttd"
              name="ttd"
              placeholder="Masukkan ttd"
            />
          </CFormGroup>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary">Do Something</CButton>{" "}
          <CButton color="secondary" onClick={() => setModal(false)}>
            Cancel
          </CButton>
        </CModalFooter>
      </CForm>
    </>
  );
};

export default Tambah;
