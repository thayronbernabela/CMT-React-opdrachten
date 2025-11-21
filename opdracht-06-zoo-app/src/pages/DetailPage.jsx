import { useParams, useNavigate } from "react-router-dom";
import animals from "../animals";
import "./DetailPage.css";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const animal = animals.find((a) => a.id === Number(id));

  if (!animal) {
    return <h2>Dier niet gevonden</h2>;
  }

  return (
    <div className="detail-container">
      <img src={animal.image} alt={animal.name} className="detail-img" />

      <h1 className="detail-title">{animal.name}</h1>

      <p className="detail-info">
        <strong>Leefomgeving:</strong> {animal.habitat}
      </p>

      <p className="detail-info">
        <strong>Dieet:</strong> {animal.diet}
      </p>

      <p className="detail-description">
        Beschrijving: {animal.description}
      </p>

      <button className="back-btn" onClick={() => navigate(-1)}>
        Terug
      </button>
    </div>
  );
}

export default DetailPage;
