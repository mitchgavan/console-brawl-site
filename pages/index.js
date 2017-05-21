import AppHead from '../components/appHead';
import Header from '../components/header';
import Hero from '../components/hero';
import Intro from '../components/intro';
import DownloadButtons from '../components/downloadButtons';
import Footer from '../components/footer';

export default () => (
  <div>
    <AppHead title="App" />
    <Header />
    <Hero />
    <Intro />
    <DownloadButtons />
    <Footer />
  </div>
);
