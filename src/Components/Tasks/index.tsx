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
  const { tasks } = useTasks();
  console.log(tasks);

  const existTasks = true;
  return (
    <Container>
      <Titles>
        <CreatedTasksTitle>
          Tarefas criadas <AmountNumber>0</AmountNumber>
        </CreatedTasksTitle>
        <ConcludeTasksTitle>
          Concluídas <AmountNumber>2 de 5</AmountNumber>
        </ConcludeTasksTitle>
      </Titles>
      {!existTasks ? (
        <ContentEmpty>
          <Icon>
            <ClipboardText size="56" />
          </Icon>
          <p>Você ainda não tem tarefas cadastradas</p>
          Crie tarefas e organize seus itens a fazer
        </ContentEmpty>
      ) : (
        tasks.map((task) => {
          return <Task key={task.id} description={task.description} />;
        })
      )}
    </Container>
  );
}
