import { v4 } from "uuid";
import axios from "axios";

const Form = ({ setTodos }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    //formdan veriyi alma
    const title = e.target[0].value;
    const status = e.target[1].value;

    //inputu kontrol et
    if (!title || status === "seciniz") {
      alert("Lütfen tüm gerekli bilgileri giriniz");
      return;
    }
    // veri tabanina eklenecek veriyi hazirlamak
    const newTodo = {
      title: title,
      status: status,
      id: v4(),
      date: new Date().toLocaleDateString(),
    };

    //olusturdugumuz todoyu apiye kaydet
    axios
      .post(`/todos`, newTodo)
      // api istegi basarili olursa newTodoyu state ekle
      .then(() => setTodos((todos) => [...todos, newTodo]))
      //ap istegi basarisiz olursa
      .catch(() => alert("Uzgunuz hata olustu"));

    e.target[0].value = "";
    e.target[1].value = "seciniz";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center gap-3 my-5"
    >
      <input
        placeholder="onr: react calis"
        className="form-control shadow"
        type="text"
      />
      <select className="form-select w-50 shadow">
        <option>Seciniz</option>
        <option value="important">Onemli</option>
        <option value="daily">Gunluk</option>
        <option value="job">Is</option>
      </select>
      <button className="btn btn-primary shadow" type="submit">
        Gonder
      </button>
    </form>
  );
};

export default Form;
