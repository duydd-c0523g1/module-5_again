import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to="/" className="nav-link active" href="#home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add" className="nav-link" href="#about">
              Add new post
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
