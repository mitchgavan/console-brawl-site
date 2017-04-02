export default () => (
  <nav>
    <a href="#about">About</a>
    <a href="#games">Games</a>
    <a href="#download">Download</a>

    <style jsx>{`
      nav {
        display: flex;
      }
      a {
        padding: 20px;
        color: #fff;
        text-decoration: none;
      }
    `}</style>
  </nav>
);
