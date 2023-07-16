import { DivMainHeader } from "./style";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <DivMainHeader>
      <header class="header">
        <nav class="navbar">
          <a href="/" class="logo">
            <img src={logo} alt="Escola Magica RP" />
          </a>
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
        </nav>
      </header>
    </DivMainHeader>
  );
};

export default Header;
