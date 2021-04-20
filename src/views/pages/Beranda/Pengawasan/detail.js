import { CButton, CModalBody, CModalFooter } from "@coreui/react";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import getPengawasanById from "src/context/actions/Pengawasan/getPengawasanById";

const Detail = ({ setModal, modal }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    if (modal.id) {
      getPengawasanById(modal.id, setData);
    }

    return () => setData("");
  }, [modal]);

  return (
    <>
      <CModalBody>
        {data ? (
          <table className="table table-striped">
            <tbody>
              <tr>
                <th>Kode. Bidang</th>
              </tr>
              <tr>
                <td>{data.kode_bidang}</td>
              </tr>

              <tr>
                <th>No. Urut</th>
              </tr>
              <tr>
                <td>{data.no_urut}</td>
              </tr>

              <tr>
                <th>No. DPA</th>
              </tr>
              <tr>
                <td>{data.no_dpa}</td>
              </tr>

              <tr>
                <th>Uraian</th>
              </tr>
              <tr>
                <td>{data.uraian}</td>
              </tr>

              <tr>
                <th>Tanggal</th>
              </tr>
              <tr>
                <td>{format(new Date(data.tanggal), "dd/MM/yyyy")}</td>
              </tr>

              <tr>
                <th>TTD</th>
              </tr>
              <tr>
                <td>{data.ttd}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div className="text-center my-3">
            <h4>Loading...</h4>
          </div>
        )}
      </CModalBody>
      <CModalFooter>
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
