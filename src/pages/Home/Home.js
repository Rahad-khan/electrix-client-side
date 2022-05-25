import React from 'react';
import BuisenessSummary from './BuisenessSummary';
import CustomerReview from './CustomerReview';
import Faq from './Faq';
import Hero from './Hero';
import Map from './Map';
import Tools from './Tools';

const Home = () => {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section className="px-3 lg:px-12 my-10">
        <Tools />
        <BuisenessSummary />
        <CustomerReview />
      </section>
      <section className="px-3 lg:px-12 my-10">
        <Faq />
      </section>
      <Map />
    </main>
  );
};

export default Home;