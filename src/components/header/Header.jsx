import "./Header.scss";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const Header = () => {
  const { state, dispatch } = useContext(Context);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        dispatch({ type: "LOGOUT" });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <header className="site-header">
      <div className="container site-header__container">
        <Link className="site-header__logo" to={"/"}>
          Realtime Chat
        </Link>
        <div className="site-header__actions">
          {state.isLogin && (
            <button className="site-header__btn button" onClick={handleLogout}>
              LOG OUT
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
