import { useState } from "react";
import { useCategories } from "../contexts/CategoriesContext";
import Input from "../UI/Input";

function AddNewCategory({ setShow }) {
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
    <div>
      <h1 className="text-xl font-bold text-white mb-2">Add New Category</h1>
      <form
        onSubmit={handleAddNewCategory}
        className="bg-gray-700 p-4 space-y-4 rounded-lg"
      >
        <Input
          label="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="flex flex-col text-gray-400">
          <label className="mb-1" htmlFor="description">
            description
          </label>
          <textarea
            className="bg-inherit border border-gray-400 rounded-lg p-2 focus:border-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
          ></textarea>
        </div>

        <div className="flex items-center gap-x-2">
          <button
            type="button"
            onClick={() => {
              setTitle("");
              setDescription("");
              setShow(false);
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
