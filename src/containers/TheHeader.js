import React, { useContext, useEffect } from "react";
import {
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
} from "@coreui/react";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import logout from "src/context/actions/Auth/logout";
import { GlobalContext } from "src/context/Provider";
import { cekUser } from "src/context/actions/Auth/cekUser";

const MySwal = withReactContent(Swal);

const TheHeader = () => {
  const { userState, userDispatch } = useContext(GlobalContext);
  const { data } = userState;

  useEffect(() => {
    cekUser(userDispatch);
  }, [userDispatch]);

  useEffect(() => {
    if (!sessionStorage.token) {
      MySwal.fire({
        icon: "error",
        title: "Akses Diblok",
        text: "Anda harus login terlebih dahulu",
      }).then((result) => {
        window.location.href = "/konfis/login";
      });
    }
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    MySwal.fire({
      icon: "warning",
      title: "Logout",
      text: "Anda yakin ingin logout ?",
      confirmButtonText: "YA",
      showCancelButton: "TIDAK",
      cancelButtonColor: "#d6382d",
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire("Anda berhasil Logout", "", "success").then((res) => {
          logout();
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("level");
          sessionStorage.removeItem("id_user");
          window.location.href = "/konfis/login";
        });
      }
    });
  };

  return (
    <CHeader className="d-flex justify-content-between px-5">
      <CHeaderBrand className="" to="/">
        {/* <CIcon name="logo" height="48" alt="Logo" /> */}
        <h2>Konfis</h2>
      </CHeaderBrand>

      <CHeaderNav>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/dashboard" onClick={(e) => handleLogout(e)}>
            Logout
          </CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>
    </CHeader>
  );
};

export default TheHeader;
