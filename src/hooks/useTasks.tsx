import { createContext, ReactNode, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Task {
  id: string;
  description: string;
  isCompleted: boolean;
}

// type TaskInput = Pick<Task, "description">;

interface TasksProviderProps {
  children: ReactNode;
}

interface TasksContextData {
  tasks: Task[];
  createTask: (Task: string) => void;
  setCompletedTask: (AmountCompletedTask: number) => void;
  setAmountTasks: (AmountTasks: number) => void;
  amountTasks: number;
  amountTasksCompleted: number;
  deleteTaskById: (taskId: string) => void;
}
const TasksContext = createContext<TasksContextData>({} as TasksContextData);

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [amountTasks, setAmountTasks] = useState(0);
  const [amountTasksCompleted, setAmountTasksCompleted] = useState(0);

  function setCompletedTask(amountCompletedTask: number) {
    setAmountTasksCompleted(amountCompletedTask);
  }

  function createTask(taskInput: string) {
    const newTask: Task = {
      id: uuidv4(),
      description: taskInput,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    setAmountTasks(amountTasks + 1);
  }

  function deleteTaskById(taskId: string) {
    let newTaks = tasks.filter((task) => task.id != taskId);
    setTasks(newTaks);
  }

  return (
    <TasksContext.Provider
      value={{
        setAmountTasks,
        setCompletedTask,
        amountTasks,
        amountTasksCompleted,
        tasks,
        createTask,
        deleteTaskById,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);
  return context;
}
