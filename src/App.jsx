import "./App.css";
import Celebrant from "./components/Celebrant";
import Header from "./components/Header";
import Spotlight from "./components/Spotlight";

export default function App() {
  return (
    <>
      <Header />
      <section className="celebrantInfo">
        <Celebrant name="Brian" />
        <Celebrant name="Alondra" />
        <Celebrant name="Leo" />
      </section>
    </>
  );
}
