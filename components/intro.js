import Button from './button';

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
        <Button
          href="https://itunes.apple.com/us/app/console-brawl/id1191387673?mt=8"
          text="Get iOS version"
        />
        <Button
          href="https://play.google.com/store/apps/details?id=com.consolebrawl"
          color="green"
          text="Get Android version"
        />
      </div>
    </div>

    <style jsx>{`
      .intro {

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
    `}</style>
  </div>
);
