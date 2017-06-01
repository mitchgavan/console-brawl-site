import AppHead from '../components/app-head';
import Header from '../components/header/header';
import Hero from '../components/hero/hero';
import Intro from '../components/intro';
import DownloadButtons from '../components/download-buttons';
import Footer from '../components/footer/footer';

export default () => (
  <div>
    <AppHead title="App" />
    <Header pathname="/" />
    <Hero />
    <Intro />
    <DownloadButtons />
    <Footer />
  </div>
);
