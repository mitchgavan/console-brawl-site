import { PropTypes } from 'react';
import Slider from 'react-slick';

const renderSlide = image => (
  <div key={image}>
    <img src={`/static/images/${image}.jpg`} alt={image} />
  </div>
);

const HeroSlider = (props) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    pauseOnHover: false,
    draggable: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    centerMode: false,
    cssEase: 'ease-in-out',
    lazyLoad: false,
    rtl: props.reverse,
  };

  return (
    <Slider {...settings}>
      {props.images.map(renderSlide)}
    </Slider>
  );
};

const { arrayOf, string, bool } = PropTypes;

HeroSlider.propTypes = {
  images: arrayOf(string).isRequired,
  reverse: bool.isRequired,
};

export default HeroSlider;
