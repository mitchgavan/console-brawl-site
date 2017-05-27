import React from 'react';
import { getRecentPlatformsGames } from '../store/games';
import AppHead from '../components/app-head';
import Header from '../components/header';
import IntroGames from '../components/intro-games';
import Search from '../components/search';
import Footer from '../components/footer';

export default class extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    getRecentPlatformsGames();
  }

  render() {
    return (
      <div>
        <AppHead title="Games" />
        <Header />
        <IntroGames />
        <Search />
        <Footer />
      </div>
    );
  }
}
