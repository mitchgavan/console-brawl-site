import PropTypes from 'prop-types';
import Slider from 'react-slick';

const renderSlide = image => (
  <div key={image}>
    <img
      srcSet={`
        /static/images/platforms/${image}.jpg 400w,
        /static/images/platforms/${image}@2x.jpg 800w,
        /static/images/platforms/${image}@3x.jpg 1200w
      `}
      sizes="50vw"
      src={`/static/images/platforms/${image}.jpg`}
      alt={image}
    />
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
    autoplaySpeed: 4000,
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
