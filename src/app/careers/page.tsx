import Navigation from '../../components/Navigation';
import CareerHero from '../../components/careers/CareerHero';
import CareersList from '../../components/careers/CareersList';
import Footer from '../../components/Footer';

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <CareerHero />
      <CareersList />
      <Footer />
    </main>
  );
}
