import React from 'react';
import Hero from '../components/Hero';
import SignatureProjects from '../components/SignatureProjects';
import AerationInnovation from '../components/AerationInnovation';
import InvestmentProcess from '../components/InvestmentProcess';

export default function Home() {
  return (
    <main>
      <Hero />
      <SignatureProjects />
      <AerationInnovation />
      <InvestmentProcess />
    </main>
  );
}
