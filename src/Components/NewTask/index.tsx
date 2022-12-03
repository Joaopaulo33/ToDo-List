import { Container, Content } from "./styles";
import {PlusCircle} from 'phosphor-react'

export function NewTask(){
    return(
        <Container>
            <Content>
                <input type="text" placeholder="Adicione uma nova tarefa" />
                <a href="#">
                    Criar   
                    <PlusCircle size={18} />
                </a>
            </Content>
        </Container>
    )
}