import { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const HeroImage = (props) => {
  const imgSrc = `/static/images/${props.platform}.jpg`;
  return (
    <ReactCSSTransitionGroup
      transitionName={props.oppositeDirection ? 'carousel-opposite' : 'carousel'}
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
          will-change: transform;
        }
        .carousel-enter {
          transform: translateY(-100%);
        }
        .carousel-enter.carousel-enter-active {
          transform: translateY(0);
          transition: transform .75s ease-out;
        }
        .carousel-leave,
        .carousel-opposite-leave {
          transform: translateY(0);
        }
        .carousel-leave.carousel-leave-active {
          transform: translateY(100%);
          transition: transform .75s ease-out;
        }
        .carousel-opposite-enter {
          transform: translateY(100%);
        }
        .carousel-opposite-enter.carousel-opposite-enter-active {
          transform: translateY(0);
          transition: transform .75s ease-out;
        }
        .carousel-opposite-leave.carousel-opposite-leave-active {
          transform: translateY(-100%);
          transition: transform .75s ease-out;
        }
      `}</style>
    </ReactCSSTransitionGroup>
  );
};

const { bool, string } = PropTypes;

HeroImage.defaultProps = {
  oppositeDirection: false,
};

HeroImage.propTypes = {
  oppositeDirection: bool,
  platform: string.isRequired,
};

export default HeroImage;
