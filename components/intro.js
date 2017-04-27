export default () => (
  <div className="intro">
    <div className="wrapper">
      <h2>Which do you prefer?</h2>
      <p>
        Find out which video games consoles you prefer with Console
        Brawl! Includes consoles from way back in the 8-bit days,
        right up to the current generation.
      </p>
      <img
        src="/static/images/mockup-black-shadow.png"
        alt="Console Brawl Mockup"
      />
      <div className="buttons">
        <a href="/test" className="button button-red">Get iOS version</a>
        <a href="/test" className="button button-green">Get Android version</a>
      </div>
    </div>

    <style jsx>{`
      .intro {
        background: linear-gradient( 45deg, #121212, #3a3a3a );
      }
      .wrapper {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
        padding: 5rem 0;
      }
      img {
        width: 750px;
        margin: 2rem 0 0 2.5rem;
      }
      h2 {
        margin: 0 auto 2rem;
      }
      p {
        font-size: 18px;
      }
      .buttons {
        text-align: center;
        margin-top: -3.5rem;
      }
      .button {
        display: inline-block;
        background: #f85032;
        background: linear-gradient(to right, #f85032, #e73827);
        color: #fefefe;
        text-decoration: none;
        margin: 0 1rem 0;
        padding: 20px;
        width: 200px;
        border-radius: 100em;
        font-size: 18px;
      }
    `}</style>
  </div>
);
