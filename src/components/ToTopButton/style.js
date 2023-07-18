import styled from "styled-components";

export const MainButtonDiv = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    position: fixed;
    bottom: 20px;
    right: 20px;
    border-radius: 10px;
    display: flex;
    
    button{
        width: inherit;
        height: inherit;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    svg{
        width: 40px;
        height: 40px;
        color: black;
    }

    @media (max-width: 700px){
        width: 40px;
        height: 40px;

        svg{
            width: 30px;
            height: 30px;
        }
    }
`