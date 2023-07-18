import styled from "styled-components";
import corredorBackground from "../../assets/corredor.jpg"

export const MainSection = styled.section`
    width: 100%;
    background-color: red;
    background-image: url(${corredorBackground});
    min-height: 100vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    padding-top: 50px;

    > div{
        width: 80%;
        gap: 50px;
        display: flex;
        justify-content: center;
        flex-flow: column;
        
        h1{
            text-align: center;
            -webkit-text-stroke: 1px black;
        }
    }

    .block-div{
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        picture{
            width: 100%;
            max-width: 600px;
            img{
                width: 100%;
                border: 3px solid #FFD700;
                border-radius: 5px;
            }
        }
    }

    .block-text-container{
        /* width: 600px; */
        display: flex;
        flex-flow: row-reverse;
    }

    .block-text-container:nth-child(1){
        flex-flow: row;
    }

    .block-div-text{
        width: 80%;
        background-color: #101F27;
        border: 1px solid #FFD700;
        border-radius: 5px;
        padding: 20px;
        display: flex;
        flex-flow: column;
        justify-content: space-around;

        font-family: 'VDSRegular';
        p{
            padding: 10px 0;
        }
    }

    @media (max-width: 1242px){

        .block-div:nth-child(2){
            flex-flow: column-reverse;
        }
        
        .block-div{
            align-items: center;
            gap: 40px;
            flex-flow: column;
        }

        .block-text-container{
            flex-flow: row;
            justify-content: center;

        }
        .block-div-text{
            width: 80%;
        }
    }

    @media (max-width: 700px){
        > div{
            h1{
                font-size: 40px;
            }
        }
        .block-div-text{
            width: 100%;
        }
    }
`