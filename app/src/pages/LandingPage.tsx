import { useRef } from "react";
import Footer from "../components/Footer";
import LandingPageBar from "../components/LandingPageBar";
import NavBar from "../components/NavBar";
import Slider from "../components/slider";
import { motion } from "framer-motion";

function LandingPage() {
  const moveToOfferRef = useRef<HTMLDivElement>(null);
  return (
    <motion.div
      className="w-full h-screen bg-main-color"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-dvw bg-main-color pt-16 font-[Barlow Condensed] font-bold">
        <NavBar></NavBar>
        <LandingPageBar
          scrollToOffer={() => {
            moveToOfferRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        ></LandingPageBar>
        <div ref={moveToOfferRef} className="w-fit py-16 mx-auto text-center">
          <h1 className="text-7xl lg:text-8xl font-[Orbitron] text-[#393E46]">
            Nasza Oferta
          </h1>
        </div>
        <Slider></Slider>
        <Footer></Footer>
      </div>
    </motion.div>
  );
}

export default LandingPage;
