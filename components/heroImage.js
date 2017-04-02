import { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const HeroImage = (props) => {
  const imgSrc = `/static/images/${props.platform}.jpg`;
  return (
    <ReactCSSTransitionGroup
      transitionName="carousel"
      transitionEnterTimeout={750}
      transitionLeaveTimeout={750}
    >
      <img
        src={imgSrc}
        alt={props.platform}
        key={props.platform}
      />
      <style jsx>{`
        img {
          position: absolute;
          top: 0;
          left: 0;
        }
        .carousel-enter {
          transform: translateY(-100%);
        }
        .carousel-enter.carousel-enter-active {
          transform: translateY(0);
          transition: transform .75s ease-out;
        }
        .carousel-leave {
          transform: translateY(0);
        }
        .carousel-leave.carousel-leave-active {
          transform: translateY(100%);
          transition: transform .75s ease-out;
        }
      `}</style>
    </ReactCSSTransitionGroup>
  );
};

const { string } = PropTypes;

HeroImage.propTypes = {
  platform: string.isRequired,
};

export default HeroImage;
