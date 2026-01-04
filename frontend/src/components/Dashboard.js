import { useEffect, useState } from "react";
import API from "../api";
import CategoryCard from "./CategoryCard";
import AddCategory from "./AddCategory";
import Layout from "./Layout";

export default function Dashboard() {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState(""); // search term

  // Load all categories
  const load = async () => {
    try {
      const res = await API.get("/categories");
      setCategories(res.data);
    } catch (err) {
      console.error("Failed to load categories:", err);
    }
  };

  useEffect(() => {
    load();
  }, []);

  // Filter categories based on search
  const filteredCategories = categories.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    // Pass search props to Layout so Topbar can use them
    <Layout search={search} setSearch={setSearch}>
      <div className="page-header">
  <h2>Category Management</h2>
  {/* pass categories prop */}
  <AddCategory refresh={load} categories={categories} />
</div>


      <div className="category-grid">
        {filteredCategories.length ? (
          filteredCategories.map(c => (
            <CategoryCard key={c._id} category={c} refresh={load} />
          ))
        ) : (
          <p>No categories found.</p>
        )}
      </div>
    </Layout>
  );
}
