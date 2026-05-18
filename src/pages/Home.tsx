import React from 'react';
import Hero from '../components/Hero';
import Heritage from '../components/Heritage';
import SignatureProjects from '../components/SignatureProjects';
import AerationInnovation from '../components/AerationInnovation';
import Testimonials from '../components/Testimonials';
import InvestmentProcess from '../components/InvestmentProcess';

export default function Home() {
  return (
    <main>
      <Hero />
      <Heritage />
      <SignatureProjects />
      <AerationInnovation />
      <Testimonials />
      <InvestmentProcess />
    </main>
  );
}
