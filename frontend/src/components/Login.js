import API from "../api";
import { Link } from "react-router-dom";

export default function Login() {
  const submit = async e => {
    e.preventDefault();
    const res = await API.post("/auth/login", {
      email: e.target.email.value,
      password: e.target.password.value
    });

    localStorage.setItem("token", res.data.token);
    window.location = "/dashboard";
  };

  return (
    <div
      className="auth-page"
      style={{
        backgroundImage: "url('/images/login-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form onSubmit={submit} className="auth-form">
        <h2>Login</h2>
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p>
          Don’t have an account? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
}
