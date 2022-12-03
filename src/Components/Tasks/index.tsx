import { AmountNumber, Container } from "./styles";

export function Tasks(){
    return(
        <Container>
            <span>Tarefas criadas <AmountNumber>0</AmountNumber></span>
            <span>Concluídas <AmountNumber>0</AmountNumber></span>
        </Container>
    )
}