import PropTypes from 'prop-types';
import ConsoleDescription from './console-description';

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
    <div>
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
