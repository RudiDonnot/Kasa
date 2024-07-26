import { NavLink } from "react-router-dom";
import "./Header.css";
import LogoHeader from "../../assets/LOGOHEADER.png";

function Header() {
  return (
    <nav className="Header">
      <img src={LogoHeader} alt="" />
      <div className="Headerrightpart" alt="">
        <NavLink
          className={(state) => (state.isActive ? "actualpage" : "otherpage")}
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={(state) => (state.isActive ? "actualpage" : "otherpage")}
          to="/A-propos"
        >
          A Propos
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
