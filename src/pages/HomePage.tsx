import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Features from '../components/Features';
import TechStack from '../components/TechStack';
import ProcessFlow from '../components/ProcessFlow';
import Statistics from '../components/Statistics';
import Testimonials from '../components/Testimonials';
import ContactHighlight from '../components/ContactHighlight';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Features />
      <TechStack />
      <ProcessFlow />
      <Statistics />
      <Testimonials />
      <ContactHighlight />
    </div>
  );
};

export default HomePage;