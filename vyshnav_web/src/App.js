// import logo from './logo.svg';
// import bootstrap from "../node_modules/bootstrap";
import "./App.css";
import About from "./components/about";

// import moon from ".images/moon.jpg";
var galaxy = require("../src/");

function App() {
  return (
    <div className="App">
      <h1>VYSHNAV-ASTRO-NUMEROLGICAL CARE</h1>
      <div className="gallery">
        <img
          src="https://media.istockphoto.com/photos/astronaut-in-outer-space-spaceman-with-starry-and-galactic-background-picture-id1353874144?s=612x612"
          alt="images"
        />
        <img
          src="https://media.istockphoto.com/photos/astronaut-in-outer-space-spaceman-with-starry-and-galactic-background-picture-id1353874144?s=612x612"
          alt="images"
        />
        <img
          src="https://media.istockphoto.com/photos/astronaut-in-outer-space-spaceman-with-starry-and-galactic-background-picture-id1353874144?s=612x612"
          alt="images"
        />
        <img
          src="https://media.istockphoto.com/photos/astronaut-in-outer-space-spaceman-with-starry-and-galactic-background-picture-id1353874144?s=612x612"
          alt="images"
        />
        <img
          src="https://media.istockphoto.com/photos/astronaut-in-outer-space-spaceman-with-starry-and-galactic-background-picture-id1353874144?s=612x612"
          alt="images"
        />
      </div>
      <About />
    </div>
  );
}

export default App;
