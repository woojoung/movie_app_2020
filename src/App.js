import React from "react";

// Reusable Components with JSX + Props
// using props
function Food({ fav }) {
  return <h3>I Love {fav}</h3>;
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.koreanbapsang.com%2Fvegan-kimchi%2F&psig=AOvVaw2eVWjaIloAtBkqdGhYfmeS&ust=1591780418203000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIitwKWy9OkCFQAAAAAdAAAAABAJ",
  },
  {},
];

// component : which is function to return html
// JSX : html + javascript
function App() {
  return (
    <div>
      <h1>HELLO!!! React!!</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="Tofu" />
      <Food fav="snack" />
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="Tofu" />
      <Food fav="snack" />
    </div>
  );
}

export default App;
