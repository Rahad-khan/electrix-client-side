import React from 'react';
import hero from '../../images/hero.jpg'

const Hero = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={hero}
          className="max-w-lg rounded-lg shadow-2xl flex-1"
          alt='mechanic'
        />
        <div className="flex-1">
          <h1 className="text-2xl md:text-5xl font-bold text-accent">
            Welcome To Toolkit
          </h1>
          <p className="md:text-xl py-4">
            We build electric tools for essential use in regular day. Those
            Products are 100% authentic.
          </p>
          <p className="pb-6 md:text-xl">
            <span className="text-2xl text-red-900">&quot;</span>
            With Great Tools , Provide More Productivity{" "}
            <span className="text-2xl text-red-900">&apos;&apos;</span>
          </p>
          <button
            type="button"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold px-6 py-3 rounded-md"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;