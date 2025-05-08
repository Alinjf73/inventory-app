function TextArea({
  label,
  register,
  name,
  required,
  validationSchema,
  errors,
}) {
  return (
    <div className="flex flex-col text-secondary-0">
      <label className="text-secondary-900 mb-1" htmlFor={label}>
        {label} {required && <span className="text-error">*</span>}
      </label>
      <textarea
        {...register(name, validationSchema)}
        className="bg-inherit border text-secondary-600 border-secondary-900 rounded-lg p-2 focus:border-blue-500"
        id="description"
      ></textarea>

      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextArea;
