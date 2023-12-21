import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <NavLink to="/" className="nav-link active" href="#home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/add" className="nav-link" href="#about">
              Add new post
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
