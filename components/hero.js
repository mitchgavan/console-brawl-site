import { Component } from 'react';
import HeroImage from '../components/heroImage';

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
      carouselHeight: 0,
      platformsLoaded: 0,
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

    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  componentDidMount() {
    setTimeout(() => { this.changeImages(); }, 4000);
  }

  changeImages() {
    this.setState(prevState => ({
      active: prevState.active === this.state.platformsA.length - 1
        ? 0
        : prevState.active + 1,
    }));
  }

  handleImageLoaded() {
    if (this.state.platformsLoaded) {
      setTimeout(() => { this.changeImages(); }, 4000);
      this.setState({ platformsLoaded: 0 });
      return;
    }

    this.setState(prevState => ({
      platformsLoaded: prevState.platformsLoaded + 1,
    }));
  }

  render() {
    const {
      platformsA,
      platformsB,
      active,
    } = this.state;

    return (
      <div className="hero">
        <div className="hero__item">
          <HeroImage
            platform={platformsA[active]}
            loaded={this.handleImageLoaded}
          />
        </div>
        <div className="hero__item">
          <HeroImage
            oppositeDirection
            platform={platformsB[active]}
            loaded={this.handleImageLoaded}
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
            padding-bottom: 33%;
          }
        `}</style>
      </div>
    );
  }
}

export default Hero;
