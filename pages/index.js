import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import HappyClient from "../Components/HappyClient";
import Promotion from "../Components/Promotion";
import About from "../Components/About";
import Contact from "../Components/Contact";

export default function Home() {
  return (
    <>
    {/* <Navbar /> */}
      <Hero />
      <Promotion />
      <HappyClient />
      <About />
      <Contact />
      {/* https://relatablecode.com/how-to-easily-trigger-react-spring-animation-when-in-view */}
      {/* https://ryo-irago.com/ */}
    </>
  );
}
