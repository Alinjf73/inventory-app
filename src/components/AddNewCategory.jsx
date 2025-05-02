import { useState } from "react";
import { useCategories } from "../contexts/CategoriesContext";
import Input from "../UI/Input";

function AddNewCategory() {
  const { categories, setCategories } = useCategories();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddNewCategory = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newCategory = { id: Date.now(), title, description };
    setCategories([...categories, newCategory]);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="mb-8">
      <h1 className="text-xl font-bold text-white mb-2">Add New Category</h1>
      <form
        onSubmit={handleAddNewCategory}
        className="bg-gray-700 p-4 space-y-4 rounded-lg"
      >
        <Input
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex items-center gap-x-2">
          <button
            type="button"
            onClick={() => {
              setTitle("");
              setDescription("");
            }}
            className="w-full py-2 px-4 rounded-lg border border-gray-400 text-gray-400 bg-inherit"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-lg bg-gray-500 text-white"
          >
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewCategory;
