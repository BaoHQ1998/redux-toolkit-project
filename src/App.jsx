import { useSelector } from "react-redux";
import Form from "./components/form";
import List from "./components/List";
import { todoListSelector } from "./redux/selector";

function App() {
  const toDoList = useSelector(todoListSelector);
  console.log(toDoList);
  return (
    <div>
      <Form />
      <List dataList={toDoList} />
    </div>
  );
}

export default App;
