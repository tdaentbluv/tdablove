import React from 'react';
import ServicesHero from '@/components/services/ServicesHero';
import ProductsServices from '@/components/services/ProductsServices';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServicesHero />
      <ProductsServices />
    </main>
  );
}
