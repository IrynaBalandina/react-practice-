import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectUserDataIsLoggedIn, selectUserData } from "../../redux/phonebook/authSlice.js";

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const Header = () => {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);
  const userData = useSelector(selectUserData);
  // const users = useSelector(selectUsers);

  return (
    <header>
      <NavLink className={buildCssClasses} to="/">
        Homepage with Pub
      </NavLink>
      <NavLink className={buildCssClasses} to="/users">
        Users
      </NavLink>
      <NavLink className={buildCssClasses} to="/products" end>
        Products
      </NavLink>
      <NavLink className={buildCssClasses} to="/contacts">
        Contacts
      </NavLink>
      {isLoggedIn ? (
        <div>
          <span>Hello, {userData.name}</span>
          <button type="button">Logout</button>
        </div>
      ) : (
        <>
          <NavLink className={buildCssClasses} to="/login">
            Login
          </NavLink>
          <NavLink className={buildCssClasses} to="/register">
            Register
          </NavLink>
        </>
      )}
    </header>
  );
};


export default Header;