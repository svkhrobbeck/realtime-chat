import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../../firebase";
import { useMyContext } from "../../context/Context";

import { Login } from "..";
import { Chat } from "../../components";

import "./Home.scss";

const Home = () => {
  const { state, dispatch } = useMyContext();

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
