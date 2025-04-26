import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Problem from '../components/home/Problem';
import DataScience from '../components/home/DataScience';
import CallToAction from '../components/home/CallToAction';

function Home() {
  return (
    <div>
      <Hero />
      <Problem />
      <Features />
      <DataScience />
      <CallToAction />
    </div>
  );
}

export default Home;