import React, { createContext, useReducer } from "react";
import initStateLogin from "./initStates/initStateLogin";
import loginReducer from "./reducers/reducerLogin";
import reducer from "./reducers/reducer";
import initState from "./initStates/initState";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  // Login
  const [loginState, loginDispatch] = useReducer(loginReducer, initStateLogin);
  // Perencanaan
  const [perencanaanState, perencanaanDispatch] = useReducer(
    reducer,
    initState
  );
  // Fisik
  const [fisikState, fisikDispatch] = useReducer(reducer, initState);
  // Pengawasan
  const [pengawasanState, pengawasanDispatch] = useReducer(reducer, initState);
};
