import data from "../data.js";
import FlashCard from "./Flashcard.jsx";

const FlashCardList = () => {
    return ( 
    <>
    <section>
        <h1 className="">Flashcard List</h1>
        {data.map(d => (
            <FlashCard question={d.question} answer={d.answer} />
        ))}
    </section>
    </> );
}
 
export default FlashCardList;

// wat moet ik doen?

// ik moet de steden ophalen uit een JavaScript bestand dat data heet
// daarna moet ik de Flashcard component importeren
// met een map() functie zorg ik ervoor dat elke stad correct wordt weergegeven