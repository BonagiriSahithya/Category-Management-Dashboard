import API from "../api";
import { Link } from "react-router-dom";

export default function Signup() {
  const submit = async e => {
    e.preventDefault();
    await API.post("/auth/signup", {
      email: e.target.email.value,
      password: e.target.password.value
    });
    window.location = "/login";
  };

  return (
    <div
      className="auth-page"
      style={{
        backgroundImage: "url('/images/signup-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form onSubmit={submit} className="auth-form">
        <h2>Signup</h2>
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Signup</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
