import styled from "styled-components";
import bibliotecaBackground2 from "../../assets/biblioteca.jpg"

export const StyledSection2 = styled.section`
    width: 100%;
    min-height: 100%;
    background-image: url(${bibliotecaBackground2});
    min-height: 100vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;

    >div{
        width: 80%;
    }
`