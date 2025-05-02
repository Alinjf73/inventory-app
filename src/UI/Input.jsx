function Input({ label, type = "text", onChange, value }) {
  return (
    <div className="flex flex-col text-gray-400">
      <label className=" mb-1" htmlFor={label}>
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        className="bg-inherit border border-gray-400 rounded-lg p-2"
        type={type}
        id={label}
      />
    </div>
  );
}

export default Input;
