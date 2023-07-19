import { DivMainHeader, HamburButtom } from "./style";
import logo from "../../assets/logo.png";
import logoMenor from "../../assets/logo-menor.png";
import { useState } from "react";
import HamburgMenu from "../HamburgMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const Header = ({ page }) => {
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
      <header className="header">
        <nav className="navbar">
          <a href="/" className="logo">
            <img src={width < 600 ? logoMenor : logo} alt="Escola Magica RP" />
          </a>
          {width < 900 ? (
            <HamburButtom onClick={onClickHaburgButton}>
              <GiHamburgerMenu />
              {showHambur && (
                <HamburgMenu page={page} setShowHambur={setShowHambur} />
              )}
            </HamburButtom>
          ) : (
            <ul className="nav-links">
              <li>
                {page === "main" ? (
                  <LinkScroll
                    activeClass="active"
                    to="comoJogar"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                    href="#"
                  >
                    Como jogar
                  </LinkScroll>
                ) : (
                  <Link to="/">Início</Link>
                )}
              </li>
              <li>
                <Link to="/creditos">Doações</Link>
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
