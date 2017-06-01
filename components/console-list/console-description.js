import PropTypes from 'prop-types';
import { breakpoints } from '../../constants/theme';

const ConsoleDescription = (props) => {
  const { name, released, developer, description, reverseOrder } = props;
  return (
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
};

const { bool, string } = PropTypes;

ConsoleDescription.propTypes = {
  description: string.isRequired,
  developer: string.isRequired,
  name: string.isRequired,
  released: string.isRequired,
  reverseOrder: bool.isRequired,
};

export default ConsoleDescription;
