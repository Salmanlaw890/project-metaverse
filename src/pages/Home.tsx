import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../sections/About";
import Explore from "../sections/Explore";
import Feedback from "../sections/Feedback";
import GetStarted from "../sections/GetStarted";
import Hero from "../sections/Hero";
import Insights from "../sections/Insights";
import WhatsNew from "../sections/WhatsNew";
import World from "../sections/World";




function Home() {
  return (
    <div className="overflow-hidden bg-[#000000ca] text-white">
      <Navbar />
      <Hero/>
      <div className="relative">
      <About/>
      <div className="gradient-03 z-0"/>
      <Explore/>
      </div>
      <GetStarted/>
     <div className="relative">
     <WhatsNew/>
     <div className="gradient-04 z-0"></div>
      <World/>
     </div>
      <div className="relative">
      <Insights/>
      <div className="gradient-04 z-0"></div>
      <Feedback/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
