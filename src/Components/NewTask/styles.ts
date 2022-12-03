import styled from "styled-components";
 export const Container = styled.div`
    display: flex;
    justify-content: center;

 `

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: -2rem;
    margin-bottom: 4rem;


    input{
        height: 3.375rem;
        width: 39.875rem;
        align-self: left;
        padding:0 1.5rem;
        margin-right: 0.5rem;
        border-radius: 0.75rem;
        border:0;
        font-size: 1rem;
        background-color: var(--gray-500);
        &::placeholder{
            color:var(--gray-300);
        }
    }

    a{
        display: block;
        width: 5.625rem;
        height: 3.25rem;
        background-color: var(--blue-dark);
        color: white;
        text-decoration: none;
        border-radius: 0.5rem;
        font-size: 0.875rem;    

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        font-weight: bold;
        
        div{
            align-items: center;
            justify-content:center
        }
    }


`