export default function Topbar({ search, setSearch }) {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <header className="topbar">
      <input
        className="search"
        placeholder="Search categories..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="profile">
        <span>Profile</span>
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>
    </header>
  );
}
