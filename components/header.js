import Nav from './nav';
import Logo from './logo';

export default () => (
  <header>
    <Logo />
    <Nav />

    <style jsx>{`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        color: white;
      }
    `}</style>

  </header>
);
