import React from 'react';
import Navigation from '@/components/Navigation';
import ServicesHero from '@/components/services/ServicesHero';
import ProductsServices from '@/components/services/ProductsServices';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <ServicesHero />
      <ProductsServices />
      <Footer />
    </main>
  );
}
