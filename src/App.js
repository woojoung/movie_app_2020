import React from "react";

// Reusable Components with JSX + Props
// using props
function Food({ name, picture }) {
  return (
    <div>
      <h3>I Love {name}</h3>
      <img src={picture}></img>
    </div>
  );
}
// Add dynamic data to web (we dont have any data from the beginning)
// imagine data came from the API

const foodILike = [
  {
    name: "Kimchi",
    image:
      "http://d3pah2c10lnl36.cloudfront.net/sura_wp/wp-content/uploads/2015/10/SUra-Korean-Cuisine-Koreas-Greatest-Food-Kimchi-Blog.jpg",
  },
  {
    name: "Kimbap",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Vegetable_gimbap.jpg/1200px-Vegetable_gimbap.jpg",
  },
  {
    name: "Samgyeopsal",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Samgyeopsal-gui.jpg/1200px-Samgyeopsal-gui.jpg",
  },
  {
    name: "Bibimbap",
    image:
      "https://howtofeedaloon.com/wp-content/uploads/2016/02/bibimbap-feature-V21-1024x866.jpg",
  },

  {
    name: "Donkasu",
    image: "http://www.wako-group.co.jp/kr/images/index/about.jpg",
  },
];

// component : which is function to return html
// JSX : html + javascript
function App() {
  return (
    <div>
      <h1>HELLO!!! React!!</h1>
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} /> // dish is just object
      ))}
    </div>
  );
}

export default App;
