import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Benefit1 from '../components/Benefit1';
import Benefit2 from '../components/Benefit2';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Benefit1 />
      <Benefit2 />
      <CallToAction />
      <Footer />
    </main>
  );
}
