import { createContext, useReducer } from "react";

const initialValue = {
  isLogin: false,
  user: null,
};

export const Context = createContext();

const reducer = (state = initialValue, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return { ...state, isLogin: true, user: payload };

    case "LOGOUT":
      return { ...state, isLogin: false, user: null };

    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export default ContextProvider;
