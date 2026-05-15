import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Focus from "@/components/Focus";
import About from "@/components/About";
import Events from "@/components/Events";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Focus />
      <Events />
      <Footer />
    </>
  );
}