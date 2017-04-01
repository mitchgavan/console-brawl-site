import React from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Hero from '../components/hero';

export default class extends React.Component {
  static async getInitialProps({ req }) {
    return req
    ? { userAgent: req.headers['user-agent'] }
    : { userAgent: navigator.userAgent };
  }
  render() {
    return (
      <div>
        <Head>
          <title>Console Brawl</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        <Hero />

        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
          }
          img {
            max-width: 100%;
            height: auto;
          }
        `}</style>
      </div>
    );
  }
}
