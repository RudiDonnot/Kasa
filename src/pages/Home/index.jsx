import { Link } from "react-router-dom";
import ImgHome from "../../assets/ImgHome.png";
import Logements from "../../components/Logements-info/logements.json";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="Homepicture">
        <h1>Chez vous, partout et ailleurs</h1>
        <img src={ImgHome} alt="" />
      </div>
      <div className="Homecardspart">
        {Logements.map((logement) => {
          return (
            <div className="Homecard" key={logement.id}>
              <Link to={"Fiche-logement/" + logement.id}>
                <p>{logement.title}</p>
                <div className="shadow"></div>
                <img src={logement.cover} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
