import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
};
export default App;
