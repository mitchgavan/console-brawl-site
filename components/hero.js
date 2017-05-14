import { Component } from 'react';
import HeroSlider from '../components/hero-slider';
import { breakpoints } from '../constants/theme';

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      platformsA: [
        'master-system',
        'super-nintendo',
        'sega-saturn',
        'nintendo-64',
        'xbox',
        'gamecube',
        'xbox-360',
      ],
      platformsB: [
        'nintendo',
        'sega-mega-drive',
        'playstation-1',
        'sega-dreamcast',
        'playstation-2',
        'wii',
        'playstation-3',
      ],
    };
  }

  render() {
    const {
      platformsA,
      platformsB,
    } = this.state;

    return (
      <div className="hero">
        <div className="hero__item">
          <HeroSlider images={platformsA} reverse={false} />
        </div>
        <div className="hero__item">
          <HeroSlider images={platformsB} reverse />
        </div>
        <img
          src="/static/images/versus.png"
          alt="versus"
        />
        <style jsx>{`
          .hero {
            display: flex;
            position: relative;
          }
          .hero__item {
            flex: 1 0 50%;
          }
          img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 45px;
            height: 45px;
          }
          @media ${breakpoints.medium} {
            img {
              width: 92px;
              height: 92px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Hero;
