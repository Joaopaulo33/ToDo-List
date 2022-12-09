import { ClipboardText } from "phosphor-react";
import { useState } from "react";
import { useTasks } from "../../hooks/useTasks";
import { Task } from "../Task";
import {
  AmountNumber,
  ConcludeTasksTitle,
  Container,
  ContentEmpty,
  CreatedTasksTitle,
  Icon,
  Titles,
} from "./styles";

export function Tasks() {
  const { tasks, amountTasks, amountTasksCompleted } = useTasks();

  const existTasks = true;
  return (
    <Container>
      <Titles>
        <CreatedTasksTitle>
          Tarefas criadas <AmountNumber>{amountTasks}</AmountNumber>
        </CreatedTasksTitle>
        <ConcludeTasksTitle>
          Concluídas{" "}
          <AmountNumber>
            {amountTasksCompleted} de {amountTasks}
          </AmountNumber>
        </ConcludeTasksTitle>
      </Titles>
      {!amountTasks ? (
        <ContentEmpty>
          <Icon>
            <ClipboardText size="56" />
          </Icon>
          <p>Você ainda não tem tarefas cadastradas</p>
          Crie tarefas e organize seus itens a fazer
        </ContentEmpty>
      ) : (
        tasks.map((task) => {
          return (
            <Task
              key={task.id}
              description={task.description}
              id={task.id}
              isCompleted={task.isCompleted}
            />
          );
        })
      )}
    </Container>
  );
}
