import React from 'react';
import styled from 'styled-components';
import imageGamecube from '../images/gamecube.jpg';
import imageMasterSystem from '../images/master-system.jpg';

const HeroBlock = styled.div`
  display: flex;
  overflow-y: hidden;
`;

const HeroItem = styled.div`
  flex: 1 0 50%;
`;

class Hero extends React.Component {

  componentDidMount() {
    const heroImage = document.getElementById('heroImage');
    const heroElem = document.getElementById('hero');

    heroImage.addEventListener('load', () => {
      const carouselHeight = `${heroImage.clientHeight}px`;
      heroElem.style.height = carouselHeight;
    });
  }

  render() {
    return (
      <HeroBlock id="hero">
        <HeroItem>
          <img src={imageGamecube} id="heroImage" alt="Gamecube" />
          <img src={imageGamecube} alt="Gamecube" />
        </HeroItem>
        <HeroItem>
          <img src={imageMasterSystem} alt="Master System" />
          <img src={imageGamecube} alt="Gamecube" />
        </HeroItem>
      </HeroBlock>
    );
  }
}

export default Hero;
