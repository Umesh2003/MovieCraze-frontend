import { NavLink } from "react-router-dom";
import styles from "./SignIn.module.css";

function AuthNav() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/signin">Sign In</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
    </nav>
  );
}

export default AuthNav;
