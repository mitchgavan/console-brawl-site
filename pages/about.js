import React from 'react';
import AppHead from '../components/app-head';
import Header from '../components/header/header';
import HeroPanel from '../components/hero-panel';
import Footer from '../components/footer/footer';

export default () => (
  <div>
    <AppHead title="About" />
    <Header pathname="about" />
    <HeroPanel
      title="The App"
      tagline="A side-project built with React Native"
    />
    <Footer />

    <style jsx>{`
      .soon {
        text-align: center;
        margin: 20rem 0;
      }
    `}</style>
  </div>
);
