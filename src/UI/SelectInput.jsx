function SelectInput({ label, value, onChange, options = [], children }) {
  return (
    <div className="flex flex-col text-gray-400">
      <label className=" mb-1" htmlFor={label}>
        {label}
      </label>
      <select
        onChange={onChange}
        value={value}
        className="bg-inherit border border-gray-400 rounded-lg p-1"
        name={label}
        id={label}
      >
        {children}
        {options.map((item) => {
          return (
            <option key={item.id} value={item.title}>
              {item.title}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectInput;
