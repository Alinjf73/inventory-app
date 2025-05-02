function Input({ label, type = "text", onChange, value, id }) {
  return (
    <div className="flex flex-col text-gray-400">
      <label className=" mb-1" htmlFor={id}>
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        className="bg-inherit border border-gray-400 rounded-lg p-2 focus:border-blue-500"
        type={type}
        id={id}
      />
    </div>
  );
}

export default Input;
