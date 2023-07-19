import styled from "styled-components";

export const DivQrContent = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');
    font-family: 'Outfit', sans-serif;
    width: 100%;
    max-width: 1000px;
    background-color: white;
    border: 10px solid black;
    border-radius: 5px;
    padding: 10px 20px;

    .div-title{
        text-align: center;
        color: #FFD900;
        -webkit-text-stroke: 1px black;
    }

    .div-infos{
        p{
            font-size: 25px;
        }
        text-align: center;
    }

    @media (max-width: 1100px){
        .div-infos{
            p{
                font-size: 17px;
                text-align: justify;
            }
        }

        .div-title{
            h1{
                margin: 10px 0;
            }
        }
    }
    @media (max-width: 600px){
        .div-title{
            h1{
                font-size: 40px;
            }
        }
    }
`