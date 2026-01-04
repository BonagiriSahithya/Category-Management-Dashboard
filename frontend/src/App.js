import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

const isAuth = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default → Signup */}
        <Route path="/" element={<Navigate to="/signup" />} />

        <Route
          path="/signup"
          element={isAuth() ? <Navigate to="/dashboard" /> : <Signup />}
        />

        <Route
          path="/login"
          element={isAuth() ? <Navigate to="/dashboard" /> : <Login />}
        />

        <Route
          path="/dashboard"
          element={isAuth() ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
