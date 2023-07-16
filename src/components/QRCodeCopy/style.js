import styled from "styled-components";

export const ContainerQR = styled.div`
    width: 100%;
    background-color: ${(props) => props.color};
    border-radius: 10px;
    border: 3px dashed #C0C0C0;
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    flex-flow: column;

    a{
        color: white;
    }
`