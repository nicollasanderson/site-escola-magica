import styled from "styled-components";
import bibliotecaBackground2 from "../../assets/biblioteca.jpg"

export const StyledSection2 = styled.section`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');
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
    padding: 100px 0;

    >div{
        width: 80%;
        gap: 50px;
        display: flex;
        justify-content: space-around;
        flex-flow: wrap;
    }

    .div-description{
        /* height: 700px; */
        max-width: 500px;
        font-size: 20px;
        background-color: #101F27;
        display: flex;;
        justify-content: center;
        flex-flow: column;
        align-items: center;
        text-align: justify;
        padding: 10px;
        border: 1px solid #FFD700;
        p{
            margin-bottom: 10px;
            font-family: 'VDSRegular';
        }
        @media (max-width: 1300px){
            max-width: 800px;
        }
    }

    .div-medias{
        display: flex;
        flex-flow: column;
        align-items: center;
        max-width: 400px;
        gap: 40px;

        h1{
            padding-bottom: 10px;
            -webkit-text-stroke: 1px black;

        }
        picture{
            width: 100%;
            display: flex;
            flex-flow: column;
        }

        iframe{
            border: 2px solid #FFD700;
            border-radius: 5px;
        }

        img{
            width: 100%;
            border: 3px solid #FFD700;
            border-radius: 5px;
        }
    }

    .screenshots-container{
        width: 600px;

        div{
            width: 100%;
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 20px;
            button{
                width: 100px;
            }
        }
    }

    .div-container-description{
        display: flex;
        flex-flow: column;
        gap: 40px;
        h1{
            text-align: center;
            margin-bottom: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            -webkit-text-stroke: 1px black;

        }
    }
`