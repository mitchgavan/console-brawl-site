import Header from '../components/header';

export default () => (
  <div>
    <Header />

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
