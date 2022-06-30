// import logo from './logo.svg';
// import bootstrap from "../node_modules/bootstrap";
import "./App.css";
import About from "./components/about";
import Why_NS from "./components/why_NS";

// import moon from ".images/moon.jpg";
var galaxy = require("../src/");

function App() {
  return (
    <div className="App">
      <div className="container head">
        <h1>VYSHNAV-ASTRO-NUMEROLGICAL CARE</h1>
      </div>
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
      <Why_NS />
    </div>
  );
}

export default App;
