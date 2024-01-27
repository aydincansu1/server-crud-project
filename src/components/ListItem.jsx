import { status } from "server/reply";
import formatDate from "../helpers/formatDate";
import getStatus from "../helpers/getSttatus";
import axios from "axios";
import { useState } from "react";
import Content from "./Content";
import EditMode from "./EditMode";

const ListItem = ({ todo, setTodos, todos }) => {
  const [isEdiMode, setIsEditMode] = useState(false);

  //silme butonuna tiklaninca calisir
  const handleDelete = () => {
    //veriyi apiden sil
    axios
      .delete(`/todos/${todo.id}`)
      //veriyi state den sil\
      .then(() =>
        setTodos((todos) => todos.filter((item) => item.id !== todo.id))
      );
  };

  //form Gonderilince calisir
  const handleEdit = (e) => {
    e.preventDefault();

    //inputtaki verileri al
    const newStatus = e.target[0].value;
    const newTitle = e.target[1].value;

    //apideki ilgili todoyu guncelle
    axios
      .patch(`/todos/${todo.id}`, { title: newTitle, status: newStatus })

      //api istegi basarili olursa arayuzu guncelle
      .then(() => {
        //arayuzu guncelle
        //statedeki eski todoyu kaldir yerine yenisini koy
        const updated = { ...todo, status: newStatus, title: newTitle };

        const newTodos = todos.map((todo) =>
          todo.id === updated.id ? updated : todo
        );
        setTodos(newTodos);
        setIsEditMode(false);
      });
  };

  return (
    <li className="gap-2 relative p-3 list-group-item d-flex justify-content-between align-items-center ">
      {!isEdiMode ? (
        <Content
          todo={todo}
          setIsEditMode={setIsEditMode}
          handleDelete={handleDelete}
        />
      ) : (
        <EditMode
          todo={todo}
          setIsEditMode={setIsEditMode}
          handleEdit={handleEdit}
        />
      )}

      <span className="date">{formatDate(todo.date)}</span>
    </li>
  );
};

export default ListItem;
