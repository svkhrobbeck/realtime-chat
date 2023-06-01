import "./Home.scss";

import { useContext } from "react";
import { Context } from "../../context/Context";
import Chat from "../chat/Chat";
import Login from "../login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const Home = () => {
  const { state, dispatch } = useContext(Context);

  onAuthStateChanged(auth, user => {
    if (user) {
      const { uid, accessToken, displayName, email, photoURL } = user;

      const payload = { uid, accessToken, displayName, email, photoURL };
      dispatch({ type: "LOGIN", payload });
    }
  });

  return (
    <>
      {state.isLogin ? (
        <>
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
};

export default Home;
