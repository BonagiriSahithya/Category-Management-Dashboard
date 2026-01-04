import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children, search, setSearch }) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        {/* Only one Topbar, receives search props */}
        <Topbar search={search} setSearch={setSearch} />
        <div className="page">{children}</div>
      </div>
    </div>
  );
}
