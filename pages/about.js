import React from 'react';
import AppHead from '../components/appHead';
import Header from '../components/header';
import Footer from '../components/footer';

export default class extends React.Component {
  render() {
    return (
      <div>
        <AppHead title="About" />
        <Header />
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
  }
}
