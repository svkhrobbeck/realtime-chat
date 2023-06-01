import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.scss";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Header = () => {
  const { state } = useContext(Context);

  const handleLogout = () => {};

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
