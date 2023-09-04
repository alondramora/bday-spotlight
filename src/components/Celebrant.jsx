export default function Celebrant({ name, onClick }) {
  return <button onClick={onClick}>{name}</button>;
}

// {
//   The Celebrant components are the buttons that show the names of each person who has a birthday in the h1 month. Example: If the h1 month in the Header component is September, the celebrant buttons will only hold names of people with Sept birthdays. When we click on a Celebrant button component, we want to render their Spotlight component.
// }
