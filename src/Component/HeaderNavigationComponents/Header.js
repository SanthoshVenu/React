import { LOGO_URL } from "../../Utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useCheckUserStatus from "../../Utils/useCheckUserStatus";
import UserContext from "../../Utils/UserContext";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const userStatus = useCheckUserStatus();

  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {}, [loginBtn]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-item">
        <ul>
          <li>{userStatus ? "Online 😊 " : "Offline 😑"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>{loggedInUser}</li>
          <li
            onClick={() =>
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login")
            }
            className="login-btn"
          >
            {loginBtn}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
