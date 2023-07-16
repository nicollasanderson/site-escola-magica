import styled from "styled-components";

export const StyledSection1 = styled.section`
    width: 100%;
    background-image: url("/src/assets/background-image.jpg");
    min-height: 100vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;

    > div{
        width: 80%;
    }
`

export const ServerNameDiv = styled.div`
    font-family: 'AquelaFonte', sans-serif;
    font-weight: bold;
    color: #FFD900;
    display: flex;
    justify-content: center;
    
    img{
        width: 100%;
        max-width: 700px;
        border-radius: 10px;
    }
`