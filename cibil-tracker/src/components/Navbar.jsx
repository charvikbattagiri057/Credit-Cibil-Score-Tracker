import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const { user, setUser, notifications, isAdmin } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const unread = notifications.filter((n) => !n.read).length;

  function handleLogout() {
    setUser(null);
    navigate("/");
  }

  function isActive(path) {
    return location.pathname === path ? "nav-link active" : "nav-link";
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">💳 CIBIL Tracker</div>
      <div className="navbar-links">
        <Link to="/dashboard" className={isActive("/dashboard")}>Dashboard</Link>
        <Link to="/check-score" className={isActive("/check-score")}>Check Score</Link>
        <Link to="/history" className={isActive("/history")}>History</Link>
        <Link to="/dispute" className={isActive("/dispute")}>Dispute</Link>
        <Link to="/tips" className={isActive("/tips")}>Tips</Link>
        <Link to="/eligibility" className={isActive("/eligibility")}>Eligibility</Link>
        <Link to="/export" className={isActive("/export")}>Export</Link>
        {isAdmin && <Link to="/admin" className={isActive("/admin")}>Admin</Link>}
        <Link to="/notifications" className={isActive("/notifications") + " notif-link"}>
          🔔 {unread > 0 && <span className="notif-badge">{unread}</span>}
        </Link>
        <span className="nav-user">Hi, {user?.name}</span>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
