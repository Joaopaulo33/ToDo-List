import {Container} from './styles'
import logo from '../../assets/logo-todo.svg'
export function Header(){
    return(
        <>
            <Container>
                <img src={logo} alt="" />
            </Container>
        </>
    )    
}