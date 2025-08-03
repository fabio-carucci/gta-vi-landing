import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import NavBar from "./sections/Navbar";
import Hero from "./sections/Hero";
import FirstVideo from "./sections/FirstVideo";
import Jason from "./sections/Jason";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <FirstVideo />
      <Jason />
    </main>
  );
};

export default App;
