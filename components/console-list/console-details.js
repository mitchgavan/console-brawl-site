import PropTypes from 'prop-types';
import ConsoleDescription from './console-description';
import { breakpoints } from '../../constants/theme';

const renderImage = (name, slug) => (
  <img
    src={`/static/images/platforms/${slug}@3x.jpg`}
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
        <div className={`columns ${reverseOrder ? 'large-4' : 'large-8'}`}>
          {reverseOrder
            ? renderDescription(props)
            : renderImage(name, slug)}
        </div>
        <div className={`columns ${reverseOrder ? 'large-8' : 'large-4'}`}>
          {reverseOrder
            ? renderImage(name, slug)
            : renderDescription(props)}
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
