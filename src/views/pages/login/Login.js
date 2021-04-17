import React, { useContext, useEffect, useState } from "react";
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { LogoKotaSamarinda } from "src/assets";

import * as Yup from "yup";
import { Formik } from "formik";
import { GlobalContext } from "src/context/Provider";
import { useHistory } from "react-router";
import { checkToken } from "src/helpers/checkToken";
import login from "src/context/actions/Auth/login";
import { cilInfo } from "@coreui/icons";

const Login = () => {
  const history = useHistory();
  const { loginState, loginDispatch } = useContext(GlobalContext);
  const { loading, data, error } = loginState;
  const [tokenAlert, setTokenAlert] = useState(true);

  // Inisialisasi state untuk handle login
  const initState = {
    username: "",
    password: "",
  };

  useEffect(() => {
    if (tokenAlert) {
      checkToken();
    }

    if (data) {
      window.location.href = "/konfis/beranda";
      // history.push("/konfis/beranda");
    }
  }, [data, tokenAlert, history, loginDispatch]);

  // Set rules of form validation using Yup
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username harus diisi"),
    password: Yup.string().required("Password harus diisi"),
  });

  const handleFormSubmit = (values) => {
    // Lakukan proses login
    setTokenAlert(false);
    login(values, loginDispatch);
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center align-items-center">
          <CCol className="text-center">
            <img
              width={140}
              src={LogoKotaSamarinda}
              alt="logo-samarinda"
              className="mb-4"
            />
            <h1>Aplikasi Pengolah Data Kontrak</h1>
          </CCol>
          <CCol>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <h1>Login</h1>
                  <p className="text-muted">Login ke akun Anda</p>
                  {error && (
                    <CAlert closeButton className="alert-danger" fade>
                      <span className="alert-inner--icon">
                        <CIcon content={cilInfo} color="white" />
                      </span>{" "}
                      <span className="alert-inner--text ml-2">{error} !</span>
                    </CAlert>
                  )}
                  <Formik
                    initialValues={initState}
                    validationSchema={validationSchema}
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
                        <CInputGroup
                          className={`mb-1 ${
                            errors.username && touched.username
                              ? "input-error"
                              : null
                          }`}
                        >
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon
                                name="cil-user"
                                className={
                                  errors.username && touched.username
                                    ? "text-danger"
                                    : null
                                }
                              />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            autoComplete="username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username || ""}
                          />
                        </CInputGroup>
                        {errors.username && touched.username && (
                          <div className="text-danger text-error">
                            {errors.username}
                          </div>
                        )}
                        <CInputGroup
                          className={`mt-3 mb-1 ${
                            errors.password && touched.password
                              ? "input-error"
                              : null
                          }`}
                        >
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon
                                name="cil-lock-locked"
                                className={
                                  errors.password && touched.password
                                    ? "text-danger"
                                    : null
                                }
                              />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password || ""}
                          />
                        </CInputGroup>
                        {errors.password && touched.password && (
                          <div className="text-danger text-error">
                            {errors.password}
                          </div>
                        )}
                        <CRow>
                          <CCol xs="6">
                            <CButton
                              color="primary"
                              className="px-4 mt-4"
                              type="submit"
                              disabled={loading ? true : false}
                            >
                              {loading ? "Harap tunggu..." : "Simpan"}
                            </CButton>
                          </CCol>
                        </CRow>
                      </CForm>
                    )}
                  </Formik>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
