import React from 'react';
import AppHead from '../components/app-head';
import Header from '../components/header';
import IntroGames from '../components/intro-games';
import Footer from '../components/footer';

export default () => (
  <div>
    <AppHead title="Games" />
    <Header />
    <IntroGames />
    <Footer />
  </div>
);
