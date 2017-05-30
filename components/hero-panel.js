import { breakpoints } from '../constants/theme';

export default () => (
  <div className="hero">
    <h1>The Consoles</h1>
    <p>
      From 8-bit to the current gen. Below are the consoles included.
    </p>
    <div className="hero__cover">
      <img
        sizes="150vw"
        srcSet="/static/images/hero-games-small.jpg 1014w,
        /static/images/hero-games.jpg 2000w"
        src="/static/images/hero-games.jpg"
        alt="Games"
      />
    </div>


    <style jsx>{`
      .hero {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 300px;
        padding: 1rem;
        text-align: center;
      }
      .hero__cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .hero__cover::after {
        opacity: 0.85;
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background: linear-gradient(to right, #232526, #414345);
      }
      h1 {
        margin: 0;
        font-size: 32px;
        line-height: 1;
        z-index: 1;
      }
      p {
        font-size: 16px;
        z-index: 1;
      }
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        z-index: 0;
      }
      @media ${breakpoints.medium} {
        .hero {
          height: 600px;
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
