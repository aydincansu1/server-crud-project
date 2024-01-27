const EditMode = ({ todo, setIsEditMode, handleEdit }) => {
  return (
    <form
      onSubmit={handleEdit}
      className="d-flex justify-content-between w-100 gap-3 align-items-center"
    >
      <select defaultValue={todo.status} className="form-select w-25 shadow">
        <option>Varsayila</option>
        <option value="important">Omenli</option>
        <option value="daily">Gunluk</option>
        <option value="job">is</option>
      </select>
      <input
        defaultValue={todo.title}
        placeholder="onr: react calis"
        className="form-control shadow"
        type="text"
      />
      <div className="btn-group">
        <button type="submit" className="btn btn-sm btn-success">
          Onayla
        </button>
        <button
          type="button"
          onClick={() => setIsEditMode(false)}
          className="btn btn-sm btn-secondary"
        >
          iptal
        </button>
      </div>
    </form>
  );
};

export default EditMode;
