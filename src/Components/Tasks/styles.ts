import styled from 'styled-components'

export const Container =  styled.div`
display: flex;
    max-width: 46rem;
    height: 18rem;
    
    justify-content: space-between;
    margin:0 auto;

    span{
        color:var(--blue);
        font-weight: bold;
        font-size: 0.875rem;
    }
`
export const AmountNumber = styled.span`
    padding: 0 0.5rem;
    font-size: 0.75rem;
`