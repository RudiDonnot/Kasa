import { useEffect, useState } from "react";
import Logements from "../../components/Logements-info/logements.json";
import Retractcards from "../../components/Retractcards/retractcards.jsx";
import "./Fiche-logement.css";
import { useParams } from "react-router-dom";
import Rating from "../../components/Rating/index.jsx";
import Carrousel from "../../components/Carrousel/index.jsx";

function Fichelogement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const filteredLogements = Logements.find((logement) => logement?.id === id);
    setLogement(filteredLogements);
  }, [id]);

  return (
    <div className="Logementpart">
      <div>
        <Carrousel pictures={logement?.pictures} />
        <div className="titre">
          <div className="leftpart">
            <h2>{logement?.title}</h2>
            <p>{logement?.location}</p>
          </div>
          <div className="rightpart">
            <p className="hostname">{logement?.host.name}</p>
            <img
              className="hostpicture"
              src={logement?.host.picture}
              alt=""
            ></img>
          </div>
        </div>
        <div className="tagsrating">
          <div className="tags">
            {logement?.tags.map((tags, index) => {
              return (
                <div key={index}>
                  <p className="tag">{tags}</p>
                </div>
              );
            })}
          </div>
          <Rating rating={logement?.rating} />
        </div>
        <div className="descriptionequipement">
          <div className="description">
            <Retractcards title="Description" content={logement?.description} />
          </div>
          <div className="equipement">
            <Retractcards
              title="Equipement"
              content={logement?.equipments.map((item, index) => {
                return (
                  <div key={index}>
                    <p>{item}</p>
                  </div>
                );
              })}
              className="vignette"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fichelogement;
