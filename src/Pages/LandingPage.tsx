import { useEffect, useState } from "react";
import AnimatedHeader from "../components/LandingPage Compnents/AnimatedHeader";
import HeroSection from "../components/LandingPage Compnents/HeroSection";
import StatsSection from "../components/LandingPage Compnents/StatsSection";
import FeaturesSection from "../components/LandingPage Compnents/FeaturesSection";
import CTASection from "../components/LandingPage Compnents/CTASection";
import FooterSection from "../components/LandingPage Compnents/FooterSection";
import { useNavigate } from "react-router-dom";
import { NAV_TARGET } from "../Utilites/Contants";
import { ROUTES } from "../Utilites/Routes";

const LandingPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigate = (page: string) => {
   
     if (page === NAV_TARGET.LOGIN) navigate(ROUTES.LOGIN);
     if (page === NAV_TARGET.SIGNUP) navigate(ROUTES.REGISTER); 
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          style={{ top: "10%", left: "10%", transform: `translate(${mousePosition.x / 50}px, ${mousePosition.y / 50}px)` }}
        />
        <div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          style={{ bottom: "10%", right: "10%", transform: `translate(${-mousePosition.x / 80}px, ${-mousePosition.y / 80}px)` }}
        />
      </div>
      <AnimatedHeader onNavigate={handleNavigate} scrollY={scrollY} mousePosition={mousePosition} />
      <HeroSection onNavigate={handleNavigate} />
      <StatsSection />
      <FeaturesSection />
      <CTASection onNavigate={handleNavigate} />
      <FooterSection />
    </div>
  );
};

export default LandingPage;