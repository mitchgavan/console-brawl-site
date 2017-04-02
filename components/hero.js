import { Component } from 'react';
import HeroImage from '../components/heroImage';

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
      carouselHeight: 0,
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

  componentDidMount() {
    this.initCarousel();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState(prevState => ({
      active: prevState.active === this.state.platformsA.length - 1
        ? 0
        : prevState.active + 1,
    }));
  }

  initCarousel() {
    this.timerID = setInterval(() => this.tick(), 4000);
  }

  render() {
    return (
      <div className="hero">
        <div className="hero__item">
          <HeroImage
            platform={this.state.platformsA[this.state.active]}
          />
        </div>
        <div className="hero__item">
          <HeroImage
            oppositeDirection
            platform={this.state.platformsB[this.state.active]}
          />
        </div>
        <style jsx>{`
          .hero {
            display: flex;
            overflow: hidden;
          }
          .hero__item {
            position: relative;
            flex: 1 0 50%;
            padding-bottom: 33.5%;
          }
        `}</style>
      </div>
    );
  }
}

export default Hero;
