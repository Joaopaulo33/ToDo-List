import { CheckCircle, Trash } from "phosphor-react";
import { BsCheckCircleFill } from "react-icons/bs";
import { useState } from "react";

import {
  CheckBox,
  Container,
  Description,
  IconCompleted,
  IconTrash,
} from "./styles";
import { useTasks } from "../../hooks/useTasks";

interface taskProps {
  description: string;
  id: string;
  isCompleted: boolean;
}

export function Task(props: taskProps) {
  const {
    setCompletedTask,
    amountTasks,
    setAmountTasks,
    amountTasksCompleted,
    tasks,
    deleteTaskById,
  } = useTasks();

  function handleClickCheck() {
    console.log(isCompleted);
    if (isCompleted == false) {
      setIscompleted(true);
      setCompletedTask(amountTasksCompleted + 1);
    } else {
      setCompletedTask(amountTasksCompleted - 1);
      setIscompleted(false);
    }
  }
  function handleDeleteCheck() {
    deleteTaskById(props.id);
    setAmountTasks(amountTasks - 1);
    if (isCompleted) {
      setCompletedTask(amountTasksCompleted - 1);
    }
  }

  const [isCompleted, setIscompleted] = useState(false);
  return (
    <Container>
      <div>
        {!isCompleted ? (
          <button onClick={handleClickCheck}>
            <CheckBox />
          </button>
        ) : (
          <button onClick={handleClickCheck}>
            <IconCompleted>
              <BsCheckCircleFill size={16} />
            </IconCompleted>
          </button>
        )}
      </div>
      {!isCompleted ? (
        <Description>{props.description}</Description>
      ) : (
        <Description>
          <s>{props.description}</s>
        </Description>
      )}
      <IconTrash>
        <button onClick={handleDeleteCheck}>
          <Trash size={17} />
        </button>
      </IconTrash>
    </Container>
  );
}
