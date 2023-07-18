import { FooterMain } from "./style";
import footer from "../../assets/footer.png";

const Footer = () => {
  return (
    <FooterMain>
      <div>
        <a href="https://discord.gg/qA7fjHTa92" target="_blank">
          <img
            src={footer}
            alt="Conecte ao nosso Discord https://discord.gg/qA7fjHTa92"
          />
        </a>
      </div>
    </FooterMain>
  );
};

export default Footer;
