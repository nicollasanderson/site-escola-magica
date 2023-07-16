import styled from "styled-components";
import florestaBackground from "../../assets/floresta.jpg"

export const MainStoreContent = styled.div`
    width: 100%;
    /* height: 100%; */
    display: flex;
    justify-content: center;
    background-image: url(${florestaBackground});
    height: 100vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: black;
    overflow: auto;

    > div{
        display: flex;
        width: 80%;
        flex-flow: column;
        gap: 30px;
        align-items: center;
        height: 100%;

        .Container-Credits{
            width: 100%;
            max-width: 1000px;
            display: flex;
            flex-flow: wrap;
            justify-content: space-between;
            @media (max-width: 700px){

            }
        }
    }
`

