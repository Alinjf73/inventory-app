import { useForm } from "react-hook-form";
import { useCategories } from "../contexts/CategoriesContext";
import Input from "../UI/Input";
import TextArea from "../UI/TextArea";

function AddNewCategory({ setShow }) {
  const { categories, setCategories } = useCategories();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleAddNewCategory = (data) => {
    const newCategory = {
      id: Date.now(),
      title: data.title,
      description: data.description,
    };
    setCategories([...categories, newCategory]);
    reset();
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-700 mb-2">
        Add New Category
      </h1>
      <form
        onSubmit={handleSubmit(handleAddNewCategory)}
        className="bg-secondary-300 p-6 space-y-4 rounded-lg"
      >
        <Input
          label="title"
          name="title"
          register={register}
          required
          validationSchema={{
            required: "title is required",
            minLength: {
              value: 3,
              message: "title length must be more than 3 characters",
            },
          }}
          errors={errors}
          autoFocus
        />

        <TextArea
          label="description"
          name="description"
          register={register}
          required
          validationSchema={{
            required: "description is required",
            minLength: {
              value: 10,
              message: "description length must be more than 10 characters",
            },
          }}
          errors={errors}
        />

        <div className="flex items-center gap-x-4">
          <button
            type="button"
            onClick={() => {
              reset();
              setShow(false);
            }}
            className="btn btn--secondary"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn--primary">
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewCategory;
