import styled from "styled-components";
import { colors } from '../../styles/theme';

export const DivMainHeader = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Lexend&display=swap');  
    font-family: 'Lexend', sans-serif;
    width: 100%;
    height: 100px;
    font-size: 30px;
    margin-top: 30px;
    
    nav{
        /* padding: 0 20px; */
        height: 100%;
        display: flex;
        align-items: center;
        align-content: center;
    }

    .header {
      border-radius: 20px;
      background-color: ${colors.azulEscuro};
      color: #fff;
      padding: 20px;
    }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .navbar a {
        display: flex;
    }

    .logo {
      font-size: 24px;
      color: #fff;
      text-decoration: none;
    }

    .nav-links {
      list-style: none;
      display: flex;
      gap: 20px;
    }

    .nav-links li a {
      color: #fff;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .nav-links li:nth-child(1) a:hover {
      color: red;
    }

    .nav-links li:nth-child(2) a:hover {
      color: green;
    }

    .nav-links li:nth-child(3) a:hover {
      color: yellow;
    }

    .nav-links li:nth-child(4) a:hover {
      color: orange;
    }

    

`

export const HamburButtom = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  cursor: pointer;
  padding: 0;
  
  svg{
    width: inherit;
    height: inherit;
  }
`