import { useState } from "react";
import "./App.css";
import Celebrant from "./components/Celebrant";
import Header from "./components/Header";
import Spotlight from "./components/Spotlight";
import celebrants from "./utils/celebrants";

export default function App() {
  const [spotlight, setSpotlight] = useState("");

  const handleClick = (celebrant) => {
    // when we click on a Celebrant component, we want to display the corresponding Spotlight component inside of the .spotlightSection section
    setSpotlight(celebrant);
  };

  return (
    <>
      <Header />
      <ul className="celebrantButtons">
        {celebrants.length > 1 &&
          celebrants.map((celebrant) => {
            return (
              <li key={celebrant.id}>
                <Celebrant
                  name={celebrant.name}
                  onClick={() => handleClick(celebrant)}
                />
              </li>
            );
          })}
      </ul>
      <span>
        Click on a person's name above to see their birthday and age info.
      </span>
      <Spotlight currentCelebrant={spotlight} />
    </>
  );
}

// dont render any Celebrant components if there is <= 1 celebrant in the array
