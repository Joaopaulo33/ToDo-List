import styled from 'styled-components'

export const Container =  styled.div`
    /* display: flex; */
    max-width: 46rem;
    height: 18rem;
    
    justify-content: center;
    margin:0 auto;

    span{
        font-weight: bold;
        font-size: 0.875rem;
    }
`

export const Titles = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin:0 auto;
`
export const CreatedTasksTitle = styled.span`
    color:var(--blue);
`

export const ConcludeTasksTitle = styled.span`
    color:var(--purple);
`

export const AmountNumber = styled.p`
    background-color: var(--gray-400);
    color: var(--gray-200);
    border-radius: 2rem;
    display: inline;
    padding:  0.125rem 0.6rem;
    font-size: 0.75rem;
`

export const ContentEmpty = styled.div`
    width: 100%;
    height: 15.25rem;
    margin: 1.5rem auto;
    text-align: center;
    justify-content: center;
    color: var(--gray-300);
    border-top:1px solid;
    border-top-color:var(--gray-400); 
    border-radius:0.5rem;
    padding: 4rem;
    font-weight: regular;
    
    p{
        font-weight: bold;
        font-size: 1rem;
    }
    `
export const Icon = styled.div`
    opacity: 0.4;
    margin-bottom: 1rem;

`