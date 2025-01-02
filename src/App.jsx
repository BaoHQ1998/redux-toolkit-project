import { useSelector } from "react-redux";
import Form from "./components/form";
import List from "./components/List";
import { todoListSelector } from "./redux/selector";

function App() {
  const toDoList = useSelector(todoListSelector);
  return (
    <div>
      <Form />
      <List dataList={toDoList} />
    </div>
  );
}

export default App;
