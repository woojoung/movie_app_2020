import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}
// The reason why we are using HashRouter instead of BrowserRouter is to set github page easilly.
// if you are using a Link in Navigation.js, Navigation has to be inside of Router
export default App;

// router takes the url and then look
