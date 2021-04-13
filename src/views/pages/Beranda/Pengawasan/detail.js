import { CButton, CModalBody, CModalFooter } from "@coreui/react";
import React, { useEffect } from "react";

const Detail = ({ setModal, modal }) => {
  useEffect(() => {
    if (modal.id) {
      console.log(modal.id);
    }
  }, [modal]);

  return (
    <>
      <CModalBody>
        <table className="table table-striped">
          <tbody>
            <tr>
              <th>Kode. Bidang</th>
            </tr>
            <tr>
              <td>123</td>
            </tr>

            <tr>
              <th>No. Urut</th>
            </tr>
            <tr>
              <td>600</td>
            </tr>

            <tr>
              <th>No. DPA</th>
            </tr>
            <tr>
              <td>123</td>
            </tr>

            <tr>
              <th>Uraian</th>
            </tr>
            <tr>
              <td>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Excepturi labore pariatur enim sit laborum, dolor impedit
                praesentium harum aliquid minima commodi quos animi ipsum
                dolores reprehenderit quis eveniet laudantium ex.
              </td>
            </tr>

            <tr>
              <th>Tanggal</th>
            </tr>
            <tr>
              <td>12/11/2021</td>
            </tr>

            <tr>
              <th>TTD</th>
            </tr>
            <tr>
              <td>Nova Dwi Sapta</td>
            </tr>
          </tbody>
        </table>
      </CModalBody>
      <CModalFooter>
        <CButton color="primary">Do Something</CButton>{" "}
        <CButton
          color="secondary"
          onClick={() =>
            setModal({
              ...modal,
              id: null,
              modal: false,
            })
          }
        >
          Cancel
        </CButton>
      </CModalFooter>
    </>
  );
};

export default Detail;
