import { FooterMain } from "./style";
import footer from "../../assets/footer.png";

const Footer = () => {
  return (
    <FooterMain>
      <div>
        <img
          src={footer}
          alt="Conecte ao nosso Discord https://discord.gg/qA7fjHTa92"
        />
      </div>
    </FooterMain>
  );
};

export default Footer;
