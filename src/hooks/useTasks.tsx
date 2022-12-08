import { createContext, ReactNode, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Task {
  id: string;
  description: string;
  isCompleted: boolean;
}

type TaskInput = Pick<Task, "description">;

interface TasksProviderProps {
  children: ReactNode;
}

interface TasksContextData {
  tasks: Task[];
  createTask: (Task: string) => void;
}
const TasksContext = createContext<TasksContextData>({} as TasksContextData);

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  function createTask(taskInput: string) {
    const newTask: Task = {
      id: uuidv4(),
      description: taskInput,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <TasksContext.Provider value={{ tasks, createTask }}>
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);
  return context;
}
