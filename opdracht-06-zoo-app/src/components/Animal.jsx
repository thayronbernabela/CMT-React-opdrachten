import { useNavigate } from "react-router-dom";
import "./Animal.css";

function Animal({ animal }) {
  const navigate = useNavigate();

  return (
    <div className="animal-card" onClick={() => navigate(`/animal/${animal.id}`)}>
      <img src={animal.image} alt={animal.name} className="animal-card-img" />
      <h3 className="animal-card-name">{animal.name}</h3>
    </div>
  );
}

export default Animal;
