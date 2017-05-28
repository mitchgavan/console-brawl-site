export default () => (
  <div className="wrapper">
    <h2>Consoles</h2>
    <div className="row">
      <div className="large-6 columns">
        <p>
          From 8-bit to the current gen. Here are the consoles included.
        </p>
      </div>
      <div className="large-6 columns">
        <p>
          From 8-bit to the current gen. Here are the consoles included.
        </p>
      </div>
    </div>

    <style jsx>{`
      .wrapper {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
        padding: 2rem 1rem 0;
      }
      h2 {
        margin: 0 auto 1rem;
        font-size: 32px;
      }
      p {
        font-size: 16px;
      }
      @media (min-width: 769px) {
        .wrapper {
          padding: 5rem 1rem 0;
        }
        h2 {
          font-size: 40px;
        }
        p {
          font-size: 18px;
        }
      }
    `}</style>
  </div>
);