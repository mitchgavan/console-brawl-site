import React from 'react';
import AppHead from '../components/app-head';
import Header from '../components/header';
import HeroPanel from '../components/hero-panel';
import Footer from '../components/footer';

export default () => (
  <div>
    <AppHead title="Games" />
    <Header pathname="consoles" />
    <HeroPanel />
    <p>
      Sorry, I still need to update this section.
    </p>
    <Footer />
  </div>
);
