import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../layout/Container';
import HeroSection from '../components/Sections/HeroSection';
import SkillsSection from '../components/Sections/SkillsSection';
import ProjectsSection from '../components/Sections/ProjectsSection';
import ContactSection from '../components/Sections/ContactSection';

function Home() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
        </Container>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
