import Navigation from '../../components/Navigation';
import ContactForm from '../../components/ContactForm';
import ContactHero from '../../components/contact/ContactHero';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <ContactHero />
      
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Contact Us
          </h1>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
