import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import TheLoop from "./components/TheLoop";
import PainPoints from "./components/PainPoints";
import FeaturesGrid from "./components/FeaturesGrid";
import Testimonials from "./components/Testimonials";
import CompoundAdvantage from "./components/CompoundAdvantage";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Animations from "./components/Animations";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <TheLoop />
        <PainPoints />
        <FeaturesGrid />
        <Testimonials />
        <CompoundAdvantage />
        <FinalCTA />
      </main>
      <Footer />
      <Animations />
    </>
  );
}
