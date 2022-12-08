import { useState } from "react";
import { Header } from "./Components/Header";
import { NewTask } from "./Components/NewTask";
import { Tasks } from "./Components/Tasks";
import { TasksProvider } from "./hooks/useTasks";
import { GlobalStyle } from "./styles/global";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <TasksProvider>
        <GlobalStyle />
        <Header />
        <NewTask />
        <Tasks />
      </TasksProvider>
    </div>
  );
}

export default App;
