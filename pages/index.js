import React from 'react';
import Head from 'next/head';

import stylesheet from '../styles/index.scss';

import Header from '../components/header';
import Hero from '../components/hero';
import Intro from '../components/intro';
import DownloadButtons from '../components/downloadButtons';
import Footer from '../components/footer';

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
          <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,600" rel="stylesheet" />
        </Head>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Header />
        <Hero />
        <Intro />
        <DownloadButtons />
        <Footer />
      </div>
    );
  }
}
