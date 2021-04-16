import React, { useState } from "react";
import {
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

const Login = () => {
  const [loading, setLoading] = useState(false);

  // Inisialisasi state untuk handle login
  const initState = {
    username: "",
    password: "",
  };

  // Set rules of form validation using Yup
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username harus diisi"),
    password: Yup.string().required("Password harus diisi"),
  });

  const handleFormSubmit = (values) => {
    console.log(values);
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
                              Login
                            </CButton>

                            {loading && "Harap tunggu..."}
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
