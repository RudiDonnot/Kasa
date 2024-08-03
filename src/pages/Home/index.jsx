import { Link } from "react-router-dom";
import Logements from "../../assets/logements.json";
import "./Home.sass";
import Banner from "../../components/Banner/index";
import BannerImg from "../../assets/ImgHome.png";

function Home() {
  return (
    <div className="Home">
      <Banner
        title={"Chez vous, partout et ailleurs"}
        picture={BannerImg}
      ></Banner>
      <div className="Homecardspart">
        {Logements.map((logement) => {
          return (
            <div className="Homecard" key={logement.id}>
              <Link to={"Fiche-logement/" + logement.id}>
                <p>{logement.title}</p>
                <div className="shadow"></div>
                <img
                  src={logement.cover}
                  alt="Couverture de la page du logement"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
