import getStatus from "../helpers/getSttatus";
const Content = ({ todo, setIsEditMode, handleDelete }) => {
  return (
    <>
      {/* getStatus : todonun durumuna gore span dondurur*/}
      {getStatus(todo.status)}
      <span>{todo.title}</span>
      <div className="btn-group">
        <button
          onClick={() => {
            setIsEditMode(true);
          }}
          className="btn btn-sm btn-primary"
        >
          Duzenle
        </button>
        <button onClick={handleDelete} className="btn btn-sm btn-danger">
          Sil
        </button>
      </div>
    </>
  );
};

export default Content;
