import React from 'react';
import styled from 'styled-components';
import imageGamecube from '../images/gamecube.jpg';
import imageMasterSystem from '../images/master-system.jpg';

const HeroBlock = styled.div`
  display: flex;
`;

const HeroItem = styled.div`

`;

const Hero = () => (
  <HeroBlock>
    <HeroItem>
      <img src={imageGamecube} alt="Gamecube" />
    </HeroItem>
    <HeroItem>
      <img src={imageMasterSystem} alt="Master System" />
    </HeroItem>
  </HeroBlock>
);

export default Hero;
