import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CNav,
  CTabs,
} from "@coreui/react";
import React, { useState } from "react";
import { TheHeader } from "src/containers";
import Fisik from "./Fisik";
import Pengawasan from "./Pengawasan";
import Perencanaan from "./Perencanaan";

const Beranda = () => {
  const [subJudul, setSubJudul] = useState("Perencanaan");
  return (
    <>
      <div className="c-app c-default-layout">
        <div className="c-wrapper">
          <TheHeader />

          <div className="c-body" style={{ paddingTop: "70px" }}>
            <CRow className="justify-content-center">
              <CCol md="10">
                <h1 className="text-center">Aplikasi Pengolah</h1>
                <h2 className="text-center mb-3">Data Kontrak {subJudul}</h2>

                <CCard>
                  <CCardBody>
                    <CTabs activeTab="perencanaan">
                      <CNav variant="tabs">
                        <CNavItem onClick={() => setSubJudul("Perencanaan")}>
                          <CNavLink data-tab="perencanaan">
                            Perencanaan
                          </CNavLink>
                        </CNavItem>
                        <CNavItem onClick={() => setSubJudul("Fisik")}>
                          <CNavLink data-tab="fisik">Fisik</CNavLink>
                        </CNavItem>
                        <CNavItem onClick={() => setSubJudul("Pengawasan")}>
                          <CNavLink data-tab="pengawasan">Pengawasan</CNavLink>
                        </CNavItem>
                      </CNav>
                      <CTabContent>
                        <CTabPane data-tab="perencanaan" className="m-3">
                          <Perencanaan />
                        </CTabPane>
                        <CTabPane data-tab="fisik" className="m-3">
                          <Fisik />
                        </CTabPane>
                        <CTabPane data-tab="pengawasan" className="m-3">
                          <Pengawasan />
                        </CTabPane>
                      </CTabContent>
                    </CTabs>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beranda;
