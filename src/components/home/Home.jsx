import { useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { Context } from "../../context/Context";
import { auth } from "../../firebase/firebase";
import { Login, Chat } from "../";
import "./Home.scss";

const Home = () => {
  const { state, dispatch } = useContext(Context);

  onAuthStateChanged(auth, user => {
    if (user) {
      const { uid, accessToken, displayName, email, photoURL } = user;
      const payload = { uid, accessToken, displayName, email, photoURL };
      dispatch({ type: "LOGIN", payload });
    }
  });

  return <>{state.isLogin ? <Chat /> : <Login />}</>;
};

export default Home;
