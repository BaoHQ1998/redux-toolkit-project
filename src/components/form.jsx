import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import todoSlice from "../redux/todoSlice";

function Form() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const handleOnchange = (e) => {
    const value = e.target?.value;

    if (value) {
      setTodo(e.target.value);
    } else {
      setTodo("");
    }
  };

  const handleAddTodo = () => {
    dispatch(
      todoSlice.actions.addTodo({
        id: uuidV4(),
        name: todo,
        completed: false,
      })
    );
  };

  return (
    <div className="flex space-x-2 justify-center my-[20px]">
      <input
        placeholder="Ađd Todo"
        onChange={handleOnchange}
        value={todo}
        className="border-2 px-2"
      />
      <button
        className="border-2 p-2 bg-lime-400"
        onClick={() => handleAddTodo()}
      >
        Add
      </button>
    </div>
  );
}

export default Form;
