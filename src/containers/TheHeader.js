import React from "react";
import {
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,

} from "@coreui/react";


const TheHeader = () => {

  return (
    <CHeader className="d-flex justify-content-between px-5">
      <CHeaderBrand className="" to="/">
        {/* <CIcon name="logo" height="48" alt="Logo" /> */}
        <h2>Konfis</h2>
      </CHeaderBrand>

      <CHeaderNav>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/dashboard" onClick={(e) => e.preventDefault()}>
            Logout
          </CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>
    </CHeader>
  );
};

export default TheHeader;
