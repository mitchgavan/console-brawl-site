import { Component } from 'react';
import HeroImage from '../components/heroImage';

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
      carouselHeight: 0,
      platforms: [
        'master-system',
        'nintendo',
        'super-nintendo',
        'sega-mega-drive',
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
      active: prevState.active === this.state.platforms.length - 1
        ? 0
        : prevState.active + 1,
    }));
  }

  initCarousel() {
    this.timerID = setInterval(() => this.tick(), 3000);
  }

  render() {
    return (
      <div className="hero">
        <div className="hero__item">
          <HeroImage platform={this.state.platforms[this.state.active]} />
        </div>
        <div className="hero__item">
          <HeroImage platform={this.state.platforms[this.state.active]} />
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
