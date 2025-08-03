import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import NavBar from "./sections/Navbar";
import Hero from "./sections/Hero";
import FirstVideo from "./sections/FirstVideo";
import Jason from "./sections/Jason";
import SecondVideo from "./sections/SecondVideo";
import Lucia from "./sections/Lucia";
import Postcard from "./sections/Postcard";
import Final from "./sections/Final";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <FirstVideo />
      <Jason />
      <SecondVideo />
      <Lucia />
      <Postcard />
      <Final />
    </main>
  );
};

export default App;
