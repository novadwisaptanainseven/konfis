import {
  CButton,
  CButtonGroup,
  CDataTable,
  CFormGroup,
  CInput,
  CModal,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";

import swal2 from "sweetalert2-react";

import React, { useState } from "react";
import data from "./data-dummy";
import Detail from "./detail";
import Edit from "./edit";
import Tambah from "./tambah";

const Perencanaan = () => {
  const [modalTambah, setModalTambah] = useState(false);
  const [modalDetail, setModalDetail] = useState({
    id: null,
    modal: false,
  });
  const [modalEdit, setModalEdit] = useState({
    id: null,
    modal: false,
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
    swal2
      .fire({
        icon: "warning",
        title: "Anda yakin ingin menghapus data ini ?",
        text: "Jika yakin, klik YA",
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "YA",
      })
      .then((res) => {
        if (res.isConfirmed) {
          swal2.fire({
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
        <CButton color="primary" onClick={() => setModalTambah(!modalTambah)}>
          Tambah Data
        </CButton>

        <CFormGroup className="m-0">
          <CInput
            type="text"
            id="cari"
            name="cari"
            placeholder="Pencarian..."
          />
        </CFormGroup>
      </div>
      <CDataTable
        items={data}
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
          <CModalTitle>Tambah Data</CModalTitle>
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
          <CModalTitle>Detail</CModalTitle>
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
          <CModalTitle>Edit Data</CModalTitle>
        </CModalHeader>
        <Edit setModal={setModalEdit} modal={modalEdit} />
      </CModal>
    </>
  );
};

export default Perencanaan;
