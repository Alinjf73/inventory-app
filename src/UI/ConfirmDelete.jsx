function ConfirmDelete({ resourceName, onClose, onConfirm }) {
  return (
    <div>
      <h1 className="font-bold text-base mb-8">
        Deleting {resourceName}. Are you sure?
      </h1>
      <div className="flex items-center justify-between gap-x-16">
        <button onClick={onClose} className="btn btn--primary flex-1">
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="btn btn--danger py-3 flex-1 hover:shadow-lg hover:bg-red-100"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
