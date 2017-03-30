import React from 'react';
import styled from 'styled-components';
import imageGamecube from '../images/gamecube.jpg';
import imageMasterSystem from '../images/master-system.jpg';
import imageNintendo64 from '../images/nintendo-64.jpg';
import imageNintendo from '../images/nintendo.jpg';

const HeroBlock = styled.div`
  display: flex;
  overflow-y: hidden;
`;

const HeroItem = styled.div`
  flex: 1 0 50%;
  position: relative;
`;

const HeroImage = styled.img `
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(${props => (props.active ? '0' : '-100%')});
`;

class Hero extends React.Component {

  constructor(props) {
    super(props);

    const imagesA = [
      {
        name: 'Gamecube',
        component: imageGamecube,
      },
      {
        name: 'Master System',
        component: imageMasterSystem,
      },
      {
        name: 'Nintendo',
        component: imageNintendo,
      },
      {
        name: 'Nintendo 64',
        component: imageNintendo64,
      },
    ];

    const imagesB = imagesA.slice();
    imagesB.push(imagesB.shift());

    this.state = {
      active: 0,
      carouselHeight: 0,
      imagesA,
      imagesB,
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
      active: prevState.active === this.state.imagesA.length - 1 ? 0 : prevState.active + 1,
    }));
  }

  initCarousel() {
    const heroImage = document.querySelector('.heroImage');
    const heroElem = document.getElementById('hero');

    heroImage.addEventListener('load', () => {
      this.setState({
        carouselHeight: `${heroImage.clientHeight}px`,
      });
      heroElem.style.height = this.state.carouselHeight;
      this.timerID = setInterval(() => this.tick(), 2000);
    });
  }

  render() {
    return (
      <HeroBlock id="hero">
        <HeroItem>
          {this.state.imagesA.map((item, index) => (
            <HeroImage
              src={item.component}
              className="heroImage"
              active={index === this.state.active}
              alt={item.name}
              key={item.name}
            />
          ))};
        </HeroItem>
        <HeroItem>
          {this.state.imagesB.map((item, index) => (
            <HeroImage
              src={item.component}
              className="heroImage"
              active={index === this.state.active}
              alt={item.name}
              key={item.name}
            />
          ))};
        </HeroItem>
      </HeroBlock>
    );
  }
}

export default Hero;
