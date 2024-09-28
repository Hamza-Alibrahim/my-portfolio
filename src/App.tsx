import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

const App = () => {
  return (
    <>
      <Navbar />
      <MainSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
};
export default App;
