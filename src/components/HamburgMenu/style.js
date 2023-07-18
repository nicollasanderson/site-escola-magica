import styled from "styled-components";

export const MainContainerHambur = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgb(0,0,0,0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;

    > nav{
        width: 100%;
        height: 100%;
        /* position: absolute; */
        /* top: 0;
        right: 0; */
        background-color: rgb(0,0,0,0.7);
    }

    ul{
        display: flex;
        flex-flow: column;
        align-items: flex-end;
        padding-top: 100px;
        height: 100%;
        width: 90%;
    }

    li{
        margin-bottom: 20px;
        a{
            font-size: 30px;
            color: white;
            -webkit-text-stroke: 1px black;
        }
    }
`;