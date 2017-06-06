import PropTypes from 'prop-types';
import ConsoleDescription from './console-description';
import { breakpoints } from '../../constants/theme';

const renderImage = (name, slug) => (
  <img
    sizes="(min-width: 1024px) 800px, 100vw"
    srcSet={
      `/static/images/platforms/${slug}.jpg 400w,
       /static/images/platforms/${slug}@2x.jpg 800w,
       /static/images/platforms/${slug}@3x.jpg 1200w`
    }
    src={`/static/images/platforms/${slug}@2x.jpg`}
    alt={name}
  />
);

const renderDescription = details => (
  <ConsoleDescription {...details} />
);

const ConsoleDetails = (props) => {
  const { name, reverseOrder, slug } = props;
  return (
    <div className="root">
      <div className="row large-collapse">
        <div className={`columns large-8 ${reverseOrder && 'large-push-4'}`}>
          {renderImage(name, slug)}
        </div>
        <div className={`columns large-4 ${reverseOrder && 'large-pull-8'}`}>
          {renderDescription(props)}
        </div>
      </div>

      <style jsx>{`
        .root {
          padding: 1rem 0;
        }
        @media ${breakpoints.medium} {
          .root {
            padding: 3rem 0;
          }
        }
    `}</style>
    </div>
  );
};

const { bool, string } = PropTypes;

ConsoleDetails.propTypes = {
  name: string.isRequired,
  slug: string.isRequired,
  reverseOrder: bool.isRequired,
};

export default ConsoleDetails;
