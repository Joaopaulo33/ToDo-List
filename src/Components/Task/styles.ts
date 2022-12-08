import  styled  from 'styled-components';
export const Container = styled.div`
    display: flex;
    width: 100%;
    min-height: 4.5rem;
    background: var(--gray-500);
    margin-top: 1rem;
    border-radius: 8px;
    padding: 1rem ;
    border:1px solid var(--gray-400) ;
    button{
        background: transparent;
        border:none;
    }
`

export const CheckBox= styled.div`
    border: 2px solid var(--blue);
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    margin-right: 1rem;
`

export const IconCompleted = styled.div`
    color: var(--purple);
    margin-right: 1rem;

`
export const Description = styled.p`
    font-size: 13px;
    font-weight:normal;
    max-width: 38.5rem;
    color: var(--gray-100);

`

export const IconTrash = styled.div`
    color: var(--gray-300);
    align-self: right;
    margin-left: auto;
`