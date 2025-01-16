import Navigation from '../../components/Navigation';
import AboutHero from '../../components/about/AboutHero';
import AboutCEO from '../../components/about/AboutCEO';
import CertificationLevels from '../../components/certification/CertificationLevels';
import AboutOrganizations from '../../components/about/AboutOrganizations';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <AboutCEO />
      <CertificationLevels />
      <AboutOrganizations />
      <Footer />
    </main>
  );
}
