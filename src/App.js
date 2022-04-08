import { useState } from "react";
import List from "./components/List";
import Alert from "./components/Alert";
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [Isediting, Setisediting] = useState(false);
  const [editId, seteditId] = useState(null);
  const [alert, SetislAlert] = useState({
    show: true,
    msg: "",
    type: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      showAlert(true, "please enter name", "danger");
    } else if (name && Isediting) {
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
      showAlert(true, "item is added", "success");
    }
  }
  function showAlert(show = false, msg = "", type = "") {
    SetislAlert({ show, msg, type });
  }
  function clearList() {
    showAlert(true, "list cleared", "danger");
    setList([]);
  }
  function removeItem(id) {
    setList(list.filter((item) => item.id !== id));
  }
  function specificItem(id) {
    const specificitem = list.find((item) => item.id === id);
    Setisediting(true);
    seteditId(id);
  }
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            className="grocery"
            type="text"
            name=""
            id=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {Isediting ? "edit" : "submit"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List items={list} removeItem={removeItem} />
        <button className="clear-btn" onClick={clearList}>
          clear items
        </button>
      </div>
    </section>
  );
}

export default App;
