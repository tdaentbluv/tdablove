import Navigation from '../../components/Navigation';
import CertificationHero from '../../components/certification/CertificationHero';
import OSHATraining from '../../components/certification/OSHATraining';
import CertificationBenefits from '../../components/certification/CertificationBenefits';
import CertificationOverview from '../../components/certification/CertificationOverview';
import CertificationLevels from '../../components/certification/CertificationLevels';
import GetCertified from '../../components/certification/GetCertified';
import RegisterClasses from '../../components/certification/RegisterClasses';
import Footer from '../../components/Footer';

export default function CertificationPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <CertificationHero />
      <OSHATraining />
      <CertificationBenefits />
      <CertificationOverview />
      <CertificationLevels />
      <GetCertified />
      <RegisterClasses />
      <Footer />
    </main>
  );
}
