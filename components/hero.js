export default () => (
  <div className="hero">
    <div className="hero__item">
      <img src="/static/images/nintendo.jpg" alt="game" />
    </div>
    <div className="hero__item">
      <img src="/static/images/master-system.jpg" alt="game" />
    </div>

    <style jsx>{`
      .hero {
        display: flex;
        overflow: hidden;
      }
      .hero__item {
        position: relative;
      }
    `}</style>
  </div>
);
