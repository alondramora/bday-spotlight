import { useState } from "react";
import "./App.css";
import Celebrant from "./components/Celebrant";
import Header from "./components/Header";
import Spotlight from "./components/Spotlight";

export default function App() {
  const handleClick = () => {
    alert("Button clicked");
  };

  return (
    <>
      <Header />
      <section className="celebrantButtons">
        <Celebrant name="Brian" birthday="September 3" onClick={handleClick} />
        <Celebrant
          name="Alondra"
          age="27"
          birthday="March 13"
          onClick={handleClick}
        />
        <Celebrant
          name="Leo"
          age="8"
          birthday="Unknown"
          onClick={handleClick}
        />
      </section>
    </>
  );
}
