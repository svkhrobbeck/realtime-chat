import { useContext } from "react";
import { signOut } from "firebase/auth";

import { Context } from "../../context/Context";
import { auth } from "../../firebase";
import "./Header.scss";

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
        <span className="site-header__logo" to={"/"}>
          Realtime Chat
        </span>
        <div className="site-header__actions">
          {state.isLogin && (
            <>
              <img className="site-header__avatar" src={state?.user?.photoURL} alt="user avatar" />
              <button className="site-header__btn button" onClick={handleLogout}>
                LOG OUT
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
