import { PropTypes } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const HeroImage = (props) => {
  const imgSrc = `/static/images/${props.platform}.jpg`;
  return (
    <CSSTransitionGroup
      transitionName={props.oppositeDirection ? 'carousel-opposite' : 'carousel'}
      transitionEnterTimeout={2750}
      transitionLeaveTimeout={2750}
    >
      <img
        src={imgSrc}
        alt={props.platform}
        key={props.platform}
        onLoad={props.loaded}
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
          transition: transform .75s ease-out 2s;
        }
        .carousel-leave,
        .carousel-opposite-leave {
          transform: translateY(0);
        }
        .carousel-leave.carousel-leave-active {
          transform: translateY(100%);
          transition: transform .75s ease-out 2s;
        }
        .carousel-opposite-enter {
          transform: translateY(100%);
        }
        .carousel-opposite-enter.carousel-opposite-enter-active {
          transform: translateY(0);
          transition: transform .75s ease-out 2s;
        }
        .carousel-opposite-leave.carousel-opposite-leave-active {
          transform: translateY(-100%);
          transition: transform .75s ease-out 2s;
        }
      `}</style>
    </CSSTransitionGroup>
  );
};

const { bool, func, string } = PropTypes;

HeroImage.defaultProps = {
  oppositeDirection: false,
};

HeroImage.propTypes = {
  loaded: func.isRequired,
  oppositeDirection: bool,
  platform: string.isRequired,
};

export default HeroImage;
