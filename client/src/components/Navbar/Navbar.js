import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/login">Login</NavLink>

      <NavLink to="/register">Register</NavLink>

      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default Navbar;
