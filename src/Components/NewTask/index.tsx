import { Container, Content } from "./styles";
import { PlusCircle, Target } from "phosphor-react";
import { useTasks } from "../../hooks/useTasks";
import { useState } from "react";

export function NewTask() {
  const { createTask, tasks, amountTasks } = useTasks();
  const [description, setDescription] = useState("");

  function HandleCreateTask() {
    createTask(description);
    setDescription("");
    // amountTasks;
  }

  return (
    <Container>
      <Content>
        <input
          type="text"
          name="input_task"
          placeholder="Adicione uma nova tarefa"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        />
        <button onClick={HandleCreateTask}>
          Criar
          <PlusCircle size={18} />
        </button>
      </Content>
    </Container>
  );
}
