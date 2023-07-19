import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
