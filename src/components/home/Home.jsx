import "./Home.scss";

import { useContext } from "react";
import { Context } from "../../context/Context";
import Chat from "../chat/Chat";
import Login from "../login/Login";

const Home = () => {
  const { state, dispatch } = useContext(Context);

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
