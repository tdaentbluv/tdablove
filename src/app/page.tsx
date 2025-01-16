import VideoHero from '../components/home/VideoHero';
import Benefits from '../components/Benefits';
import CallToAction from '../components/CallToAction';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <VideoHero />
      <Benefits />
      <CallToAction />
    </main>
  );
}
