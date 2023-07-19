import styled from "styled-components";

export const CreditContainer = styled.div`
    background-color: white;
    /* width: 100%; */
    width: 490px;
    padding: 10px 20px;
    border: 10px solid black;
    margin-bottom: 10px;

    .credit-name-h1{
        color: #3163E3;
        -webkit-text-stroke: 1px black;
        height: 70px;
    }

    .credit-price-h1{
        color: #3163E3;
        -webkit-text-stroke: 1px black;
        font-size: 49px;
    }

    .credit-old-price{
        text-decoration: line-through;
        color: #3163E3;
        -webkit-text-stroke: 1px black;
    }

    .div-wrapper{
        text-align: center;
    }

    .container-infos{
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: space-between;

        b{
            color: red;
            -webkit-text-stroke: 1px black;
        }
    }

    @media (max-width: 700px){
        width: 100%;

        .div-wrapper{
            flex-flow: column;
        }

        .container-infos{
            flex-flow: column;

            > div{
                display: flex;
                gap: 10px;
                flex-flow: column;
            }
        }
        .credit-price-h1{
            font-size: 45px;
        }
        .credit-name-h1{
            font-size: 40px;
        }
    }

    @media (max-width: 400px){
        .credit-price-h1{
            font-size: 39px;
        }
        .credit-name-h1{
            font-size: 40px;
            height: 100%;
        }
    }
`