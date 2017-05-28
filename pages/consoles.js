import React from 'react';
import AppHead from '../components/app-head';
import Header from '../components/header';
import IntroConsoles from '../components/intro-consoles';
import Footer from '../components/footer';

export default () => (
  <div>
    <AppHead title="Games" />
    <Header pathname="consoles" />
    <IntroConsoles />
    <Footer />
  </div>
);
