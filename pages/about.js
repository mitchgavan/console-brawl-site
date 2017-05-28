import React from 'react';
import AppHead from '../components/app-head';
import Header from '../components/header';
import Footer from '../components/footer';

export default () => (
  <div>
    <AppHead title="About" />
    <Header pathname="about" />
    <div className="soon">Coming soon...</div>
    <Footer />

    <style jsx>{`
      .soon {
        text-align: center;
        margin: 20rem 0;
      }
    `}</style>
  </div>
);
