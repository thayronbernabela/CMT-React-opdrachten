import animals from "../animals";
import Animal from "../components/Animal";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-container">
      <h1 className="home-title">Zoo App</h1>

      <div className="animals-grid">
        {animals.map((animal) => (
          <Animal key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
