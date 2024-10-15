import { NavLink } from "react-router-dom";
import "./Header.sass";
import LogoHeader from "../../assets/LOGOHEADER.png";

function Header() {
  return (
    <nav className="Header">
      <img src={LogoHeader} alt="" />
      <div className="Headerrightpart" alt="">
        <NavLink
          className={(state) => (state.isActive ? "actualpage" : "otherpage")}
          to="/Kasa"
        >
          Accueil
        </NavLink>
        <NavLink
          className={(state) => (state.isActive ? "actualpage" : "otherpage")}
          to="/Kasa/A-propos"
        >
          A Propos
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
