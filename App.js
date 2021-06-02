import { useState } from "react";
import "./styles.css";
import ToDoItem from "./ToDoItem";

export default function App() {
  const [set, setvalue] = useState("");

  function addvalue(event) {
    const newvalue = event.target.value;
    setvalue(newvalue);
  }
  const [items, setitems] = useState([]);

  function click() {
    setitems((prev) => {
      return [...prev, set];
    });
    setvalue("");
  }
  function deleteitem(id) {
    setitems((pre) => {
      return pre.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={addvalue} value={set} type="text" />
        <button onClick={click}>Add</button>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onCheck={deleteitem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
