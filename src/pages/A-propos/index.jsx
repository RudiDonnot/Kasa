import Retractcards from "../../components/Retractcards/retractcards.jsx";
import "./Apropos.sass";
import Banner from "../../components/Banner";
import BannerImg from "../../assets/ImgApropos.png";

function Apropos() {
  return (
    <div className="Apropos">
      <Banner title={""} picture={BannerImg}></Banner>

      <div className="Aproposcards">
        <Retractcards
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"
        />
        <Retractcards
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"
        />
        <Retractcards
          title="Service"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"
        />
        <Retractcards
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  );
}

export default Apropos;
