import { Component } from 'react';
// import { findDOMNode } from 'react-dom';

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
    this.timerID = setInterval(() => this.tick(), 2000);
  }

  render() {
    return (
      <div className="hero">
        <div className="hero__item">
          {this.state.platforms.map((platform) => {
            const imgSrc = `/static/images/${platform}.jpg`;
            return (
              <img
                src={imgSrc}
                className="hero__img"
                alt={platform}
                key={platform}
              />
            );
          })}
        </div>
        <div className="hero__item">
          <img
            src="/static/images/master-system.jpg"
            className="hero__img"
            alt="game"
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
            padding-bottom: 56.25%;
          }
          .hero__img {
            position: absolute;
            top: 0;
            left: 0;
          }
        `}</style>
      </div>
    );
  }
}

export default Hero;
