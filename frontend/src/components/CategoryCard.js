import { useState } from "react";
import API from "../api";

export default function CategoryCard({ category, refresh }) {
  const [editing, setEditing] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [form, setForm] = useState({
    name: category.name,
    itemCount: category.itemCount,
    image: category.image
  });

  const updateCategory = async () => {
    try {
      await API.put(`/categories/${category._id}`, form);
      setEditing(false);
      refresh();
    } catch (err) {
      console.error("Failed to update category:", err);
    }
  };

  return (
    <div className="category-card">
      <div className="image-wrapper">
        {!imgError && (
          <img
            src={form.image}
            alt={form.name}
            onError={() => setImgError(true)}
          />
        )}
        <button className="edit-btn" onClick={() => setEditing(!editing)}>
          ✏ Edit
        </button>
      </div>

      {editing ? (
        <div className="info">
          <input
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="number"
            value={form.itemCount}
            onChange={e => setForm({ ...form, itemCount: e.target.value })}
          />
          <input
            value={form.image}
            onChange={e => setForm({ ...form, image: e.target.value })}
          />
          <button className="btn-primary" onClick={updateCategory}>
            Save
          </button>
        </div>
      ) : (
        <div className="info">
          <h4>{category.name}</h4>
          <span>{category.itemCount} items</span>
        </div>
      )}
    </div>
  );
}
