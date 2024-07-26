import LogoFooter from "../../assets/LOGOFOOTER.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <img src={LogoFooter} alt="" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
