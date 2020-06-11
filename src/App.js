import React from "react";
import PropTypes from "prop-types";

// Add dynamic data to web (we dont have any data from the beginning)
// imagine data came from the API
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://d3pah2c10lnl36.cloudfront.net/sura_wp/wp-content/uploads/2015/10/SUra-Korean-Cuisine-Koreas-Greatest-Food-Kimchi-Blog.jpg",
    rating: 4.1,
  },
  {
    id: 2,
    name: "Kimbap",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Vegetable_gimbap.jpg/1200px-Vegetable_gimbap.jpg",
    rating: 4.2,
  },
  {
    id: 3,
    name: "Samgyeopsal",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Samgyeopsal-gui.jpg/1200px-Samgyeopsal-gui.jpg",
    rating: 4.1,
  },
  {
    id: 4,
    name: "Bibimbap",
    image:
      "https://howtofeedaloon.com/wp-content/uploads/2016/02/bibimbap-feature-V21-1024x866.jpg",
    rating: 4.8,
  },
  {
    id: 5,
    name: "Donkasu",
    image: "http://www.wako-group.co.jp/kr/images/index/about.jpg",
    rating: 5.0,
  },
];

// Reusable Components with JSX + Props
// Using props
function Food({ name, picture, rating }) {
  return (
    <div>
      <h3>I Love {name}</h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}
// Check to allow props to use, and it has to be name only "PropTypes"
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function renderFood(dish) {
  return (
    <Food
      key={dish.id}
      name={dish.name}
      picture={dish.image}
      rating={dish.rating}
    />
  );
}

// component : which is function to return html, function App is component in react
// JSX : html + javascript
function App() {
  return (
    <div>
      <h1>HELLO!!! React!!</h1>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
