function SelectInput({
  label,
  name,
  register,
  required,
  options = [],
  errors,
  validationSchema,
}) {
  return (
    <div className="flex flex-col">
      <label className="text-secondary-900 mb-1" htmlFor={label}>
        {label} {required && <span className="text-error">*</span>}
      </label>
      <select
        {...register(name, validationSchema)}
        className="bg-secondary-300 border border-secondary-900 rounded-lg p-1 text-secondary-900"
        name={name}
        id={name}
      >
        {options.map((item) => {
          return (
            <option key={item.id} value={item.title}>
              {item.title}
            </option>
          );
        })}
      </select>
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default SelectInput;
