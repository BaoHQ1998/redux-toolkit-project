import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, updateTodo } from "../redux/actions";
import { useState } from "react";

function Item({ dataItem }) {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(dataItem.name);
  const handleCheck = () => {
    dispatch(toggleTodo({ id: dataItem.id }));
  };
  const onChangeName = (e) => {
    const value = e.target?.value;
    if (value) {
      setName(value);
    } else {
      setName("");
    }
  };

  const handleSave = () => {
    dispatch(
      updateTodo({
        ...dataItem,
        name: name,
      })
    );
    setName("");
    setIsEdit(false);
  };

  const handleCancel = () => {
    setName(dataItem.name);
    setIsEdit(false);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(dataItem.id));
  };

  return (
    <div className="flex justify-between border-2 rounded-lg w-full p-[20px] mb-2">
      <div className="flex gap-[10px]">
        {isEdit ? (
          <input
            value={name}
            onChange={onChangeName}
            className="border-2 p-2"
          />
        ) : (
          <>
            <input
              type="checkbox"
              checked={dataItem.completed}
              onChange={handleCheck}
            />
            <p
              className={`${
                dataItem.completed ? `line-through text-gray-400` : ""
              }`}
            >
              {dataItem?.name || ""}
            </p>
          </>
        )}
      </div>
      <div className="flex gap-[10px]">
        {isEdit ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEdit(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Item;
