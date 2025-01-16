import Navigation from '../components/Navigation';
import VideoHero from '../components/home/VideoHero';
import Benefits from '../components/Benefits';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <VideoHero />
      <Benefits />
      <CallToAction />
      <Footer />
    </main>
  );
}
