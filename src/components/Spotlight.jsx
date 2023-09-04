import App from "../App";
import Celebrant from "./Celebrant";
App;

export default function Spotlight({ currentCelebrant }) {
  return (
    <section className="bdaySpotlight">
      <p>{currentCelebrant.name}</p>
      <p>{currentCelebrant.birthday}</p>
      <p>{currentCelebrant.age}</p>
    </section>
  );
}
