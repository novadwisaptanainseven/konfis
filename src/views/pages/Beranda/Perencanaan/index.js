import {
  CButton,
  CButtonGroup,
  CCol,
  CDataTable,
  CFormGroup,
  CInput,
  CLabel,
  CModal,
  CModalHeader,
  CModalTitle,
  CSelect,
} from "@coreui/react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import React, { useState } from "react";
import data from "./data-dummy";
import Detail from "./detail";
import Edit from "./edit";
import Tambah from "./tambah";
import CIcon from "@coreui/icons-react";
import { cilPrint } from "@coreui/icons";

const MySwal = withReactContent(swal2);
const Perencanaan = () => {
  const [modalTambah, setModalTambah] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [modalDetail, setModalDetail] = useState({
    id: null,
    modal: false,
  });
  const [modalEdit, setModalEdit] = useState({
    id: null,
    modal: false,
  });

  const filteredData = data.filter((item) => {
    if (item.ttd && item.no_urut && item.kode_bidang && item.no_dpa) {
      if (
        item.ttd.toLowerCase().includes(filterText.toLowerCase()) ||
        item.no_urut.toLowerCase().includes(filterText.toLowerCase()) ||
        item.kode_bidang.toLowerCase().includes(filterText.toLowerCase()) ||
        item.no_dpa.toLowerCase().includes(filterText.toLowerCase())
      ) {
        return true;
      }
    }
    return false;
  });

  const fields = [
    "no",
    "kode_bidang",
    "no_urut",
    "no_dpa",
    "uraian",
    "tanggal",
    "ttd",
    "aksi",
  ];

  // Menangani tombol hapus
  const handleDelete = (id) => {
    MySwal.fire({
      icon: "warning",
      title: "Anda yakin ingin menghapus data ini ?",
      text: "Jika yakin, klik YA",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "YA",
    }).then((res) => {
      if (res.isConfirmed) {
        MySwal.fire({
          icon: "success",
          title: "Terhapus",
          text: "Data berhasil dihapus",
        });
      }
    });
  };

  return (
    <>
      <div className="mb-3 d-flex justify-content-between">
        <div>
          <CButton color="primary" className="mr-2" onClick={() => setModalTambah(!modalTambah)}>
            Tambah Data
          </CButton>
          <CButton
            style={{ height: 35 }}
            color="info"
          >
            Cetak <CIcon content={cilPrint} size="sm" />
          </CButton>
        </div>

        <CFormGroup row className="m-0" style={{ width: 250 }}>
          <CCol className="pr-0" md="3">
            <CLabel>Sorting</CLabel>
          </CCol>
          <CCol>
            <CSelect id="sort" name="sort">
              <option value="asc">A - Z</option>
              <option value="desc">Z - A</option>
            </CSelect>
          </CCol>
        </CFormGroup>

        <CFormGroup className="m-0">
          <CInput
            type="text"
            id="cari"
            name="cari"
            placeholder="Pencarian..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
        </CFormGroup>
      </div>
      <CDataTable
        items={filteredData}
        fields={fields}
        striped
        itemsPerPage={10}
        responsive={true}
        pagination
        scopedSlots={{
          aksi: (item) => (
            <td>
              <CButtonGroup>
                <CButton
                  color="info"
                  size="sm"
                  onClick={() =>
                    setModalDetail({
                      ...modalDetail,
                      id: item.id,
                      modal: !modalDetail.modal,
                    })
                  }
                >
                  Detail
                </CButton>
                <CButton
                  color="success"
                  size="sm"
                  onClick={() =>
                    setModalEdit({
                      ...modalDetail,
                      id: item.id,
                      modal: !modalEdit.modal,
                    })
                  }
                >
                  Edit
                </CButton>
                <CButton
                  color="danger"
                  size="sm"
                  onClick={() => handleDelete(item.id)}
                >
                  Hapus
                </CButton>
              </CButtonGroup>
            </td>
          ),
          uraian: (item) => <td width="500">{item.uraian}</td>,
        }}
      />

      {/* Modal Tambah */}
      <CModal
        show={modalTambah}
        onClose={() => setModalTambah(!modalTambah)}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Tambah Data Perencanaan</CModalTitle>
        </CModalHeader>
        <Tambah setModal={setModalTambah} />
      </CModal>

      {/* Modal Detail */}
      <CModal
        show={modalDetail.modal}
        onClose={() =>
          setModalDetail({
            ...modalDetail,
            id: null,
            modal: false,
          })
        }
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Detail Perencanaan</CModalTitle>
        </CModalHeader>
        <Detail setModal={setModalDetail} modal={modalDetail} />
      </CModal>

      {/* Modal Edit */}
      <CModal
        show={modalEdit.modal}
        onClose={() =>
          setModalEdit({
            ...modalEdit,
            id: null,
            modal: false,
          })
        }
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Edit Data Perencanaan</CModalTitle>
        </CModalHeader>
        <Edit setModal={setModalEdit} modal={modalEdit} />
      </CModal>
    </>
  );
};

export default Perencanaan;
