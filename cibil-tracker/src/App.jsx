import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import CheckScore from "./pages/CheckScore";
import History from "./pages/History";
import "./App.css";

function App() {
  // Global user state shared across all pages using Context
  const [user, setUser] = useState(null);
  const [scoreHistory, setScoreHistory] = useState([
    { month: "February 2026", score: 681, date: "27 Feb" },
    { month: "March 2026", score: 695, date: "31 Mar" },
    { month: "April 2026", score: 728, date: "28 Apr" },
    { month: "May 2026", score: 742, date: "29 May" },
  ]);

  return (
    <UserContext.Provider value={{ user, setUser, scoreHistory, setScoreHistory }}>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* Protected routes - redirect to login if not logged in */}
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
          <Route path="/check-score" element={user ? <CheckScore /> : <Navigate to="/" />} />
          <Route path="/history" element={user ? <History /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
