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

interface taskProps {
  description: string;
}

export function Task(props: taskProps) {
  function handleClickCheck() {
    console.log("lalla");
    setIscompleted(!isCompleted);
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
      <Description>{props.description}</Description>
      <IconTrash>
        <Trash size={17} />
      </IconTrash>
    </Container>
  );
}
