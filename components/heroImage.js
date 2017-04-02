import { PropTypes } from 'react';

const HeroImage = (props) => {
  const imgSrc = `/static/images/${props.platform}.jpg`;
  return (
    <img
      src={imgSrc}
      className="hero__img"
      alt={props.platform}
    />
  );
};

const { string } = PropTypes;

HeroImage.propTypes = {
  platform: string.isRequired,
};

export default HeroImage;
