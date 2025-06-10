import { useState } from "react";
import Hero from "@/components/Hero";
import ChatInterface from "@/components/ChatInterface";
import VolunteerCards from "@/components/VolunteerCards";

type Section = "home" | "chat" | "volunteers";

const Index = () => {
  const [currentSection, setCurrentSection] = useState<Section>("home");

  const navigateToSection = (section: "chat" | "volunteers") => {
    setCurrentSection(section);
  };

  const navigateToHome = () => {
    setCurrentSection("home");
  };

  if (currentSection === "chat") {
    return <ChatInterface onBack={navigateToHome} />;
  }

  if (currentSection === "volunteers") {
    return <VolunteerCards onBack={navigateToHome} />;
  }

  return <Hero onNavigate={navigateToSection} />;
};

export default Index;
