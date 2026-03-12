import { TaskProvider } from "./context/TaskContext";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <TaskProvider>
      <h1>Task Manager</h1>
      <AddTask />
      <TaskList />
    </TaskProvider>
  );
}

export default App;