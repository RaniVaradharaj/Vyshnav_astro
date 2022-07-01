// import logo from './logo.svg';
// import bootstrap from "../node_modules/bootstrap";
import "./App.css";
import About from "./components/about";
import Why_NS from "./components/why_NS";
import Marquee from "react-fast-marquee";
import Contact from "./components/contact";

// import moon from ".images/moon.jpg";
var galaxy = require("../src/");

function App() {
  return (
    <div className="App">
      <div className="container welcome">
        {/* <Marquee> */}
        <h4>Welcome to</h4>
        {/* </Marquee> */}
      </div>
      <div className="container head">
        <Marquee>VYSHNAV ASTRONUMERLOGICAL CARE</Marquee>
      </div>

      <div className="buttondiv">
        <button className="button">
          <b>BOOK NOW FOR APPOINTMENT</b>
        </button>
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
      <Contact />
    </div>
  );
}

export default App;
