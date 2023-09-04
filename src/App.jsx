import { useState } from "react";
import "./App.css";
import Celebrant from "./components/Celebrant";
import Header from "./components/Header";
import Spotlight from "./components/Spotlight";
import celebrants from "./utils/celebrants";

export default function App() {
  const [spotlight, setSpotlight] = useState(celebrants[0]);

  const handleClick = (celebrant) => {
    // when we click on a Celebrant component, we want to display the corresponding Spotlight component inside of the .spotlightSection section
    setSpotlight(celebrant);
  };

  return (
    <>
      <Header />
      <ul className="celebrantButtons">
        {celebrants.map((celebrant) => {
          return (
            <li key={celebrant.id}>
              <Celebrant
                name={celebrant.name}
                age={celebrant.age}
                birthday={celebrant.birthday}
                onClick={() => handleClick(celebrant)}
              />
            </li>
          );
        })}
      </ul>
      <section className="spotlightSection">
        <Spotlight currentCelebrant={spotlight} />
      </section>
    </>
  );
}
