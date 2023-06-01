import { useContext } from "react";
import "./Login.scss";
import { Context } from "../../context/Context";

const Login = () => {
  const { dispatch } = useContext(Context);
  const handleLogin = () => {
    dispatch({ type: "LOGIN" });
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
