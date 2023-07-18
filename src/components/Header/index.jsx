import { DivMainHeader, HamburButtom } from "./style";
import logo from "../../assets/logo.png";
import logoMenor from "../../assets/logo-menor.png";
import { useState } from "react";
import HamburgMenu from "../HamburgMenu";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [showHambur, setShowHambur] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  window.onresize = window.onload = () => {
    setWidth(window.innerWidth);
  };

  const onClickHaburgButton = () => {
    setShowHambur(!showHambur);
  };

  return (
    <DivMainHeader>
      <header class="header">
        <nav class="navbar">
          <a href="/" class="logo">
            <img src={width < 600 ? logoMenor : logo} alt="Escola Magica RP" />
          </a>
          {width < 900 ? (
            <HamburButtom onClick={onClickHaburgButton}>
              <GiHamburgerMenu />
              {showHambur && <HamburgMenu setShowHambur={setShowHambur} />}
            </HamburButtom>
          ) : (
            <ul class="nav-links">
              <li>
                <a href="/creditos">Doações</a>
              </li>
              <li>
                <a href="#">Como jogar</a>
              </li>
              <li>
                <a target="_blank" href="https://discord.gg/qA7fjHTa92">
                  Discord
                </a>
              </li>
            </ul>
          )}
        </nav>
      </header>
    </DivMainHeader>
  );
};

export default Header;
