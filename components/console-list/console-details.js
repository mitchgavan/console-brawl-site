import PropTypes from 'prop-types';
import { breakpoints } from '../../constants/theme';

const renderImage = (name, slug) => (
  <img
    src={`/static/images/platforms/${slug}@3x.jpg`}
    alt={name}
  />
);

const renderDescription = (name, released, developer, description, reverseOrder) => (
  <div>
    <header className={`heading ${reverseOrder && 'heading-reverse'}`}>
      <h3>{name}</h3>
      <div>{released}</div>
      <div>{developer}</div>
    </header>
    <div className={`description ${!reverseOrder && 'description-reverse'}`}>
      {description}
    </div>
    <style jsx>{`

      @media ${breakpoints.medium} {
        .heading {
          text-align: right;
        }
        .heading-reverse {
          text-align: left;
        }
        .description {
          position: relative;
          width: 120%;
          padding: 2rem;
          background-color: #555;
        }
        .description-reverse {
          transform: translateX(-17%);
        }
      }
    `}
    </style>
  </div>
);

const ConsoleDetails = (props) => {
  const { name, description, developer, released, reverseOrder, slug } = props;
  return (
    <div>
      <div className="row large-collapse">
        <div className={`columns ${reverseOrder ? 'large-4' : 'large-8'}`}>
          {reverseOrder
            ? renderDescription(name, released, developer, description, reverseOrder)
            : renderImage(name, slug)}
        </div>
        <div className={`columns ${reverseOrder ? 'large-8' : 'large-4'}`}>
          {reverseOrder
            ? renderImage(name, slug)
            : renderDescription(name, released, developer, description, reverseOrder)}
        </div>
      </div>
    </div>
  );
};

const { bool, string } = PropTypes;

ConsoleDetails.propTypes = {
  name: string.isRequired,
  description: string.isRequired,
  released: string.isRequired,
  developer: string.isRequired,
  slug: string.isRequired,
  reverseOrder: bool.isRequired,
};

export default ConsoleDetails;
