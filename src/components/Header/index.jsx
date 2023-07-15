import { DivMainHeader } from "./style";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <DivMainHeader>
      {/* <nav>
        <div>
          
        </div>

        <ul></ul>
      </nav> */}
      <header class="header">
        <nav class="navbar">
          <a href="#" class="logo">
            <img src={logo} alt="Escola Magica RP" />
          </a>
          <ul class="nav-links">
            <li>
              <a href="#">Loja</a>
            </li>
            <li>
              <a href="#">Discord</a>
            </li>
            <li>
              <a href="#">X</a>
            </li>
          </ul>
        </nav>
      </header>
    </DivMainHeader>
  );
};

export default Header;
