import { useContext } from "react";
import { signInWithPopup } from "firebase/auth";

import { auth, provider } from "../../firebase/firebase";
import { Context } from "../../context/Context";
import "./Login.scss";

const Login = () => {
  const { dispatch } = useContext(Context);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const { uid, accessToken, photoURL, email, displayName } = result.user;

        localStorage.setItem("token", accessToken);
        localStorage.setItem("uid", uid);

        const payload = { uid, accessToken, photoURL, email, displayName };
        dispatch({ type: "LOGIN", payload });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <section className="login">
      <button className="button login__btn" onClick={handleLogin}>
        Sign in with Google
      </button>
    </section>
  );
};

export default Login;
