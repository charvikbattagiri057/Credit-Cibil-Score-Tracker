import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogout() {
    setUser(null);
    navigate("/");
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        💳 CIBIL Tracker
      </div>
      <div className="navbar-links">
        <Link
          to="/dashboard"
          className={location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}
        >
          Dashboard
        </Link>
        <Link
          to="/check-score"
          className={location.pathname === "/check-score" ? "nav-link active" : "nav-link"}
        >
          Check Score
        </Link>
        <Link
          to="/history"
          className={location.pathname === "/history" ? "nav-link active" : "nav-link"}
        >
          History
        </Link>
        <span className="nav-user">Hi, {user?.name}</span>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
