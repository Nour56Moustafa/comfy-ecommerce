import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/user_reducer";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  START_INPUT,
  START_SUBMIT,
  SUCCESS_SUBMIT,
  ERROR_SUBMIT,
} from "../action";

const initialState = {
  user: null,
  email: "",
  password: "",
  confirm_password: "",
  loading: false,
  error: false,
  error_message: "",
};

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: START_INPUT, payload: { name, value } });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: START_SUBMIT });
      await signInWithEmailAndPassword(auth, state.email, state.password);
      navigate("/");
      dispatch({ type: SUCCESS_SUBMIT });
    } catch (error) {
      dispatch({ type: ERROR_SUBMIT, payload: error.message });
    }
  };

  const handleSingnupSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: START_SUBMIT });
      if (state.password === state.confirm_password)
        await createUserWithEmailAndPassword(auth, state.email, state.password);
      navigate("/");
      dispatch({ type: SUCCESS_SUBMIT });
    } catch (error) {
      dispatch({ type: ERROR_SUBMIT, payload: error.message });
    }
  };

  const logout = () => {
    auth.signOut();
  };

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      dispatch({ type: "unsubsribe", payload: user });
    });
    return unSubscribe;
  }, []);

  return (
    <UserContext.Provider
      value={{
        ...state,
        handleInputChange,
        handleLoginSubmit,
        handleSingnupSubmit,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
