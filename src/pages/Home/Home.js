import React from 'react';
import BuisenessSummary from './BuisenessSummary';
import Hero from './Hero';
import Tools from './Tools';

const Home = () => {
    return (
      <main>
        <section>
          <Hero />
        </section>
        <section className="px-3 lg:px-12 my-10">
          <Tools/>
        <BuisenessSummary/>
        </section>
      </main>
    );
};

export default Home;