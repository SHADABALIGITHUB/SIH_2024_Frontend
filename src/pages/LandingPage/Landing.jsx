// import AuthProcess from "./AuthProcess";
import Contact from "./Contact";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import Bubbles from "./Bubbles";
import LandingNavbar from "./LandingNavbar";
import Overlayer from "../Overlay/Overlayer";


export const LandingPage = () => {
  return (
    <>
    
    
    <main className={`light relative w-full h-full mx-auto max-w-7xl`}>
       <LandingNavbar />
      <div className="w-full pt-16 mx-auto">
        <Hero />
        <Features />
        
        <Contact />
        <Footer />
      </div>
    </main>
     
    <Bubbles yStart={300} yEnd={-10000} />
    </>
  );
};