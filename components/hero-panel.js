import { breakpoints, colors } from '../constants/theme';

export default () => (
  <div className="hero">
    <h1>The Consoles</h1>
    <p>
      From 8-bit to the current gen. Below are the consoles included.
    </p>

    <style jsx>{`
      .hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 300px;
        padding: 1rem;
        background-image: url('./static/images/hero-games-small.jpg');
        background-position: center center;
        background-size: cover;
        text-align: center;
      }
      h1 {
        margin: 0;
        font-size: 32px;
        line-height: 1;
      }
      p {
        font-size: 16px;
      }
      @media ${breakpoints.medium} {
        .hero {
          height: 600px;
          background-image: url('./static/images/hero-games.jpg');
          background-repeat: repeat-x;
          background-size: auto;
        }
        h1 {
          font-size: 52px;
        }
        p {
          font-size: 20px;
        }
      }
    `}</style>
  </div>
);
