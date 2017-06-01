import React from 'react';
import AppHead from '../components/app-head';
import Header from '../components/header/header';
import HeroPanel from '../components/hero-panel';
import ConsoleList from '../components/console-list/console-list';
import Footer from '../components/footer/footer';

export default () => (
  <div>
    <AppHead title="Games" />
    <Header pathname="consoles" />
    <HeroPanel />
    <ConsoleList />
    <Footer />
  </div>
);
