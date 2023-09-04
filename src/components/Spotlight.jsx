export default function Spotlight({ currentCelebrant }) {
  return (
    <section className="bdaySpotlight">
      <h2>{currentCelebrant.name}</h2>
      <p>{currentCelebrant.birthday}</p>
      <p>{currentCelebrant.age}</p>
    </section>
  );
}
