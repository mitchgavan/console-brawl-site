export default () => (
  <div className="wrapper">
    <h2>Which do you prefer?</h2>
    <p>
      Find out which video game consoles you prefer with Console
      Brawl! Includes consoles from way back in the 8-bit days,
      right up to the current generation.
    </p>
    <img
      src="/static/images/mockup-black-shadow.png"
      alt="Console Brawl Mockup"
    />

    <style jsx>{`
      .wrapper {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
        padding: 2rem 1rem 0;
      }
      img {
        width: 750px;
        margin: 1rem 0 0 1.5rem;
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
        img {
          padding: 2rem 0 0 2.5rem;
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
