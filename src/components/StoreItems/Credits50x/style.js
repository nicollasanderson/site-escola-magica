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
`