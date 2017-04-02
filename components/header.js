import Nav from './nav';

export default () => (
  <header>
    <h1>Console Brawl</h1>
    <Nav />

    <style jsx>{`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #222;
        padding: 20px;
        color: white;
      }
    `}</style>

  </header>
);
