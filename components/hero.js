import { Component } from 'react';
import HeroSlider from '../components/hero-slider';

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
        <style jsx>{`
          .hero {
            display: flex;
            overflow: hidden;
          }
          .hero__item {
            flex: 1 0 50%;
          }
        `}</style>
      </div>
    );
  }
}

export default Hero;
