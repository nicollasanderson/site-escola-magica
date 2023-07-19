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
    text-align: justify;

    .color-b{
        color: red;
    }

    .div-title{
        text-align: center;
        color: #45BA01;
        -webkit-text-stroke: 1px black;
    }

    .div-description{
        p{
            text-align: justify;
        }
    }
    
    .div-infos{
        display: flex;
        align-items: center;
        text-align: center;
        gap: 20px;
        h3{
            text-align: justify;
        }
        > div{
            display: flex;
            flex-flow: column;
            gap: 20px;
        }

        figure{
            width: 400px;
            /* min-width: 350px; */

            img{
                width: 100%;
                max-width: 300px;
            }
        }

        .nossoS2{
            text-shadow: 2px 2px 9px rgba(0, 0, 0);
            -webkit-text-stroke: 1px black;
            color: white;
        }
    }

    @media (max-width: 1100px){
        gap: 20px;
        flex-flow: column;
        display: flex;
        .div-infos{
            flex-flow: column;

            >div{
                width: 100%;
            }

            figure{
                width: 100%;
            }
        }

        .div-description{
            h3{
                font-size: 15px;
            }
        }

        .div-title{
            font-size: 10px;
        }
    }

`