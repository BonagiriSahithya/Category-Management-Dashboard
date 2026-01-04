import API from "../api";

export default function AddCategory({ refresh, categories }) {
  const submit = async e => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const itemCount = e.target.count.value;
    const image = e.target.image.value;

    // Check duplicate
    if (categories.some(cat => cat.name.toLowerCase() === name.toLowerCase())) {
      alert("This category already exists!");
      return;
    }

    await API.post("/categories", { name, itemCount, image });
    refresh();
    e.target.reset();
  };

  return (
    <form onSubmit={submit} className="add-form">
      <input name="name" placeholder="Name" required />
      <input name="count" placeholder="Items" required />
      <input name="image" placeholder="Image URL" required />
      <button className="btn-primary">+ Add Category</button>
    </form>
  );
}
