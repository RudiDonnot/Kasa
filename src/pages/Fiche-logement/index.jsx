import { useEffect, useState } from "react";
import Logements from "../../assets/logements.json";
import Retractcards from "../../components/Retractcards/retractcards.jsx";
import "./Fiche-logement.sass";
import { useParams } from "react-router-dom";
import Rating from "../../components/Rating/index.jsx";
import Carrousel from "../../components/Carrousel/index.jsx";
import Error from "../../components/Error/index.jsx";

function Fichelogement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const filteredLogements = Logements.find((logement) => logement?.id === id);
    setLogement(filteredLogements);
  }, [id]);

  if (logement) {
    return (
      <div className="Logementpart">
        <div>
          <Carrousel pictures={logement?.pictures} />
          <div className="titre">
            <div className="leftpart">
              <h1>{logement?.title}</h1>
              <h2>{logement?.location}</h2>
              <div className="tags">
                {logement?.tags.map((tags, index) => {
                  return (
                    <div key={index}>
                      <p className="tag">{tags}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="rightpart">
              <div className="hostinfos">
                <div className="hostname">
                  <p>{logement?.host.name.split(" ")[0]}</p>
                  <p>{logement?.host.name.split(" ")[1]}</p>
                </div>
                <img
                  className="hostpicture"
                  src={logement?.host.picture}
                  alt=""
                ></img>
              </div>
              <Rating rating={logement?.rating} />
            </div>
          </div>
          <div className="descriptionequipement">
            <div className="description">
              <Retractcards
                title="Description"
                content={<p>{logement?.description}</p>}
              />
            </div>
            <div className="equipement">
              <Retractcards
                title="Equipement"
                content={logement?.equipments.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
                className="vignette"
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Error />;
  }
}

export default Fichelogement;
