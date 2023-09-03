import App from "../App";
import Celebrant from "./Celebrant";
App;

export default function Spotlight(props) {
  return (
    <section className="bdaySpotlight">
      <p>{props.name}</p>
      <p>{props.birthday}</p>
      <p>{props.age}</p>
    </section>
  );
}
