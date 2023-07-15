import styled from "styled-components";
import { colors } from '../../styles/theme';

export const DivMainHeader = styled.div`
    font-family: 'AquelaFonte', sans-serif;
    width: 100%;
    height: 100px;
    background-color: green;
    font-size: 40px;
    
    nav{
        padding: 0 20px;
        height: 100%;
        display: flex;
        align-items: center;
        align-content: center;
    }

    .header {
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