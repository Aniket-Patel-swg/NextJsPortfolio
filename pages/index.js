import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import HappyClient from "../Components/HappyClient";
import Promotion from "../Components/Promotion";
import About from "../Components/About";

export default function Home() {
  return (
    <>
    <Navbar />
      <Hero />
      <Promotion />
      <HappyClient />
      <About />
    </>
  );
}
