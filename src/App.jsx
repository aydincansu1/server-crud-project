import { useEffect, useState } from "react";
import Form from "./components/Form";
import Loader from "./components/Loader";
import ListItem from "./components/ListItem";
import axios, { Axios } from "axios";

//varsayilan olarak bu url ekle
//yapilan butun isteklerin basindaki api urlsini belirle
axios.defaults.baseURL = `http://localhost:3000`;

function App() {
  const [todos, setTodos] = useState(null);
  const [page, setPage] = useState(1);
  const [maxPageCount, setMaxPageCount] = useState();

  //bilesenin ekrana basilmna olayini izler

  useEffect(() => {
    //apiden todo verilerini cekme
    axios
      .get(`/todos`, {
        timeout: 3000,
        timeoutErrorMessage: "zaman asimi",
        params: {
          _per_page: 10,
          _page: page,
        },
      })
      .then((res) => {
        setMaxPageCount(res.data.pages), setTodos(res.data.data);
      })

      .catch((err) => {
        if (err.message === "zaman asimi") {
          alert("istek zaman asimina ugradi");
        }
      });
  }, [page]);

  return (
    <div className="container p-3 p-md-5">
      <h2 className="text-center">
        SERVER <span className="text-warning">CRUD</span>
      </h2>
      <Form setTodos={setTodos} />

      <ul className="list-group">
        {!todos && <Loader />}
        {todos?.map((todo) => (
          <ListItem
            key={todo.id}
            todo={todo}
            setTodos={setTodos}
            todos={todos}
          />
        ))}
      </ul>
      <div className="d-flex justify-content-between my-5 ">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="btn btn-primary"
        >
          {"< Geri "}
        </button>

        <span>{page}</span>

        <button
          disabled={page === maxPageCount}
          onClick={() => setPage(page + 1)}
          className="btn btn-primary"
        >
          {"ileri > "}
        </button>
      </div>
    </div>
  );
}

export default App;
